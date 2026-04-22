"use client";
import { motion } from "framer-motion";

export default function VipNewsletter() {
  return (
    <section className="py-24 px-6 bg-surface-muted border-t border-brand-gold/10 relative overflow-hidden">
      <div className="ambient-glow-gold left-1/2 -translate-x-1/2 top-0 opacity-10"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 glass p-10 md:p-16 rounded-sm md:rounded-3xl border border-brand-gold/20 shadow-2xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-16 h-16 rounded-full border border-brand-gold/40 flex items-center justify-center mx-auto mb-8 text-brand-gold bg-brand-gold/5 shadow-[0_0_20px_rgba(89,133,101,0.15)]">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Patronların Arasına Katıl</h2>
          <p className="font-sans text-foreground-subtle text-sm md:text-base mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Patron Erkek Kuaforu ailesine katilin. Randevu onceligi, ozel stil sirlari ve en yeni bakim tekniklerinden ilk siz haberdar olun.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="E-Posta Adresiniz" 
              required
              className="flex-1 bg-surface/60 border border-brand-gold/30 px-6 py-4 text-foreground placeholder-gray-600 focus:outline-none focus:border-brand-gold transition-colors text-sm tracking-widest text-center sm:text-left"
            />
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: "#fff", color: "#121212" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-brand-gold text-brand-black px-10 py-4 uppercase font-bold text-[10px] tracking-[0.2em] transition-colors flex justify-center items-center gap-3"
            >
              KATIL <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
