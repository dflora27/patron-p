$ErrorActionPreference = "Stop"

$files = Get-ChildItem -Path c:\Users\yanik\Music\patron2\components -Recurse -Filter *.tsx

$pattern1 = "const isEn = typeof window !== 'undefined' ? window.location.pathname.startsWith('/en') : false;"
$pattern2 = 'const isEn = typeof window !== "undefined" ? window.location.pathname.startsWith("/en") : false;'
$replaceStr = "const pathname = usePathname() || `"`";`n  const isEn = pathname.startsWith('/en');"
$importStr = "`"use client`";`nimport { usePathname } from 'next/navigation';"

foreach ($f in $files) {
    if ($f.FullName -match "node_modules") { continue }
    
    $c = Get-Content $f.FullName -Raw
    $changed = $false
    
    if ($c.Contains($pattern1)) {
        $c = $c.Replace($pattern1, $replaceStr)
        $changed = $true
    }
    
    if ($c.Contains($pattern2)) {
        $c = $c.Replace($pattern2, $replaceStr)
        $changed = $true
    }
    
    if ($changed -and !$c.Contains("import { usePathname }")) {
        $c = $c.Replace("`"use client`";", $importStr)
    }
    
    if ($changed) {
        [IO.File]::WriteAllText($f.FullName, $c)
        Write-Host "Fixed $($f.Name)"
    }
}
