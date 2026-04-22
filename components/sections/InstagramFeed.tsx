"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const DUMMY_POSTS = [
  { id: 1, img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80", likes: "1.2K", comments: "34" },
  { id: 2, img: "https://images.unsplash.com/photo-1542458428-fb4f23b1dc32?auto=format&fit=crop&q=80", likes: "856", comments: "12" },
  { id: 3, img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80", likes: "2.1K", comments: "89" },
  { id: 4, img: "https://images.unsplash.com/photo-1620606087786-8adff1b91386?auto=format&fit=crop&q=80", likes: "945", comments: "21" },
  { id: 5, img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80", likes: "1.5K", comments: "45" },
  { id: 6, img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80", likes: "3.2K", comments: "112" },
];

export default function InstagramFeed() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith('/en');

  return (
    <section className="py-32 bg-surface px-6 relative border-t border-brand-gold/5 max-w-[100vw] overflow-hidden">
      <div className="ambient-glow-green -left-40 top-40 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-gold tracking-[0.2em] text-xs font-bold uppercase mb-4"
            >
              @patronkuafor
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground"
            >
              {isEn ? "Follow Our Social Media" : "Sosyal Medya Hesaplarımızı Takip Edin"}
            </motion.h2>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://www.instagram.com/patronkuafor/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white/5 border border-brand-gold/30 hover:bg-brand-gold hover:text-brand-black text-brand-gold px-8 py-4 rounded-full transition-all duration-300 group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span className="uppercase text-[10px] tracking-[0.2em] font-bold font-sans">
              {isEn ? "View on Instagram" : "Instagram'da Gör"}
            </span>
          </motion.a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
          {DUMMY_POSTS.map((post, i) => (
            <motion.a
              href="https://www.instagram.com/patronkuafor/"
              target="_blank"
              rel="noopener noreferrer"
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative aspect-square overflow-hidden bg-surface-elevated rounded-xl md:rounded-3xl border border-hairline/10 cursor-pointer shadow-2xl"
            >
              <img 
                src={post.img} 
                alt="Instagram Post" 
                className="w-full h-full object-cover grayscale-[0.2] contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1s] ease-out"
              />
              <div className="absolute inset-x-4 top-4 flex justify-end z-20">
                 <svg className="w-6 h-6 text-foreground drop-shadow-md opacity-80" viewBox="0 0 24 24" fill="currentColor"><path d="M2.93 5.4c0-1.36 1.11-2.47 2.47-2.47h13.2c1.36 0 2.47 1.11 2.47 2.47v13.2c0 1.36-1.11 2.47-2.47 2.47H5.4c-1.36 0-2.47-1.11-2.47-2.47V5.4zM20.2 5.4c0-.49-.4-.89-.89-.89H4.69c-.49 0-.89.4-.89.89v13.2c0 .49.4.89.89.89h14.62c.49 0 .89-.4.89-.89V5.4zm-2.9 6.6c0 2.92-2.37 5.29-5.29 5.29s-5.29-2.37-5.29-5.29 2.37-5.29 5.29-5.29 5.29 2.37 5.29 5.29zm-1.58 0c0-2.05-1.66-3.71-3.71-3.71s-3.71 1.66-3.71 3.71 1.66 3.71 3.71 3.71 3.71-1.66 3.71-3.71z"/></svg>
              </div>
              <div className="absolute inset-0 bg-surface/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-4 z-10">
                <div className="flex items-center gap-6 text-foreground font-bold translate-y-4 group-hover:translate-y-0 transition-all duration-700 ease-out">
                  <span className="flex items-center gap-2">
                    <svg className="w-6 h-6 fill-current text-foreground hover:text-brand-gold transition-colors" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-6 h-6 fill-current text-foreground hover:text-brand-gold transition-colors" viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/></svg>
                    {post.comments}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
