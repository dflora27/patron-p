const fs = require('fs');
const path = require('path');

const targetDirs = [
  'components/sections',
  'components/hero',
  'components/layout',
  'components/ui',
  'components/conversion'
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const regex = /const isEn = typeof window !== ['"]undefined['"] \? window\.location\.pathname\.startsWith\(['"]\/en['"]\) : false;/g;
      
      if (regex.test(content)) {
        // Replace isEn declaration
        content = content.replace(regex, 'const pathname = usePathname() || "";\n  const isEn = pathname.startsWith("/en");');
        
        // Add import { usePathname } if not exists
        if (!content.includes('import { usePathname }')) {
          let lines = content.split('\n');
          let injected = false;
          for(let i=0; i<lines.length; i++){
            if (lines[i].includes('"use client"') || lines[i].includes("'use client'")) {
              lines.splice(i+1, 0, 'import { usePathname } from "next/navigation";');
              injected = true;
              break;
            }
          }
          if (!injected) {
            lines.unshift('import { usePathname } from "next/navigation";');
            // If it doesn't even have "use client", we should probably add it.
            if(!content.includes('use client')){
                lines.unshift('"use client";');
            }
          }
          content = lines.join('\n');
        }
        
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

targetDirs.forEach(d => {
  const absPath = path.join(process.cwd(), d);
  if (fs.existsSync(absPath)) {
    processDir(absPath);
  }
});
