"use client";
import { usePathname } from 'next/navigation';
import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { motion } from "framer-motion";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith('/en');
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  return (
    <section className="py-32 px-6 bg-surface relative border-t border-brand-gold/10 overflow-hidden">
      <div className="ambient-glow-green right-0 top-0 opacity-50"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="lg:w-1/3">
          <motion.h4
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-brand-gold tracking-[0.2em] text-xs font-bold uppercase mb-4"
          >
            {isEn ? "Transformation (Before & After)" : "Dönüşüm (Önce & Sonra)"}
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-serif text-4xl text-foreground mb-6"
          >
            {isEn ? "The Sharpest Form of Men's Style" : "Erkek Stilinin En Keskin Hali"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="font-sans text-foreground-subtle text-sm leading-relaxed mb-8"
          >
            {isEn ? (
              <>Beyond an ordinary haircut, a complete vision build. Experience the transformation from the hands of our masters. <strong className="text-brand-gold font-normal">Slide the golden line in the middle to see the magic.</strong></>
            ) : (
              <>Sıradan bir saç kesiminin ötesinde, tam bir vizyon inşası. Ustalarımızın elinden çıkan değişimi bizzat deneyimleyin. <strong className="text-brand-gold font-normal">Sihri görmek için ortadaki altın çizgiyi kaydırın.</strong></>
            )}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:w-2/3 w-full relative"
        >
          <div
            ref={containerRef}
            className="w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize glass p-2"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onClick={(e) => handleMove(e.clientX)}
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              {/* Sonra: After (Sharp) - Background */}
              <img src="/images/sonra.jpg" alt="Sonra" className="absolute inset-0 w-full h-full object-cover grayscale-[0.5]" draggable="false" />

              <div className="absolute inset-0 bg-surface-elevated/20 pointer-events-none"></div>

              {/* Önce: Before (Messy) - Clipped via CSS */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img src="/images/once.jpg" alt="Önce" className="absolute inset-0 w-full h-full object-cover grayscale sepia-[.3]" draggable="false" />
              </div>

              {/* Ortadaki Slider Çizgisi */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-brand-gold shadow-[0_0_10px_rgba(89,133,101,1)] cursor-ew-resize transition-transform duration-75"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface border-[2px] border-brand-gold flex items-center justify-center shadow-2xl">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="2"><path d="M18 8l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
