"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const SESSION_KEY = "patron-preloader-seen";

export default function Preloader() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem(SESSION_KEY);
    if (seen) return; // Already shown this session — skip
    setIsLoading(true);
    const timer = window.setTimeout(() => {
      setIsLoading(false);
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* storage disabled */
      }
    }, 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%", transition: { duration: 1, ease: "easeInOut", delay: 0.1 } }}
          className="fixed inset-0 z-[99999] bg-surface-muted flex flex-col items-center justify-center p-4 border-b border-brand-gold"
          aria-hidden
        >
          <div className="w-32 h-32 relative mb-12 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.05, 0.3, 0.05] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 border border-brand-gold rounded-full"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-20 h-20 drop-shadow-[0_0_15px_rgba(89,133,101,0.5)]"
            >
              <Image
                src="/images/logo.png"
                alt="Patron"
                fill
                priority
                sizes="80px"
                className="object-contain"
              />
            </motion.div>
          </div>

          <div className="overflow-hidden h-8">
            <motion.h2
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="font-serif text-brand-gold uppercase tracking-[0.4em] text-xs font-bold md:tracking-[0.6em]"
            >
              <span className="uppercase text-[10px] tracking-[0.4em] font-bold text-foreground-subtle block mt-4">
                {isEn ? "Patron Barbershop" : "Patron Erkek Kuaförü"}
              </span>
            </motion.h2>
          </div>

          <div className="w-64 h-[1px] bg-hairline/20 mt-8 relative overflow-hidden">
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
              className="absolute top-0 bottom-0 w-1/3 bg-brand-gold shadow-[0_0_10px_rgba(89,133,101,1)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
