"use client";
import { usePathname } from 'next/navigation';
import { useState } from "react";
import { motion } from "framer-motion";

export default function FastBooking() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith('/en');
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    date: ""
  });

  const WHATSAPP_NUMBER = "905535737992";
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Merhaba, randevu almak istiyorum.\n\nIsim: ${formData.name}\nServis: ${formData.service}\nTarih: ${formData.date}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="booking" className="py-24 px-6 bg-[#0c0d0c] relative flex justify-center border-t border-white/5">
      <div className="absolute inset-0 bg-brand-obsidian/40 mix-blend-multiply border-b border-brand-gold/10"></div>

      <div className="max-w-6xl w-full flex flex-col md:flex-row bg-[#090909] border border-brand-gold/20 rounded-lg relative overflow-hidden shadow-2xl z-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50"></div>

        <div className="md:w-1/2 p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-brand-gold/10 relative">
          <div className="ambient-glow-green -left-20 -top-20 opacity-30"></div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10 px-0 md:px-8">
            <h4 className="text-brand-gold tracking-[0.2em] text-xs font-bold uppercase mb-4">{isEn ? "Book Now" : "Rezervasyon Yap"}</h4>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">Zamanını <span className="text-brand-gold italic">İyi Değerlendir</span></h2>
            <p className="font-sans text-gray-400 mb-10 font-light leading-relaxed">
              Sırada beklemek vizyon sahibi erkeklere göre değildir. Aşağıdaki detayları onaylayarak doğrudan profesyonel hattımıza mesajını ilet, senin için en uygun saati hemen ayarlayalım.
            </p>
            <div className="flex gap-4">
              <a href="tel:+905535737992" className="flex-1 bg-white/5 border border-white/10 text-white text-center py-4 text-xs font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-colors rounded">HEMEN ARA</a>
              <a href="https://maps.app.goo.gl/share_link" target="_blank" rel="noopener noreferrer" className="flex-1 bg-brand-gold/5 border border-brand-gold/20 text-brand-gold text-center py-4 text-[10px] md:text-xs font-bold tracking-[0.2em] hover:bg-brand-gold hover:text-black transition-colors rounded">YOL TARIFI AL</a>
            </div>
          </motion.div>
        </div>

        <form onSubmit={handleSubmit} className="md:w-1/2 flex flex-col gap-6 font-sans p-8 md:p-16 bg-[#0a0b0a] z-10">
          <input
            type="text"
            required
            placeholder="Adınız Soyadınız"
            className="w-full bg-transparent border-b border-brand-gold/30 p-4 text-white focus:outline-none focus:border-brand-gold transition-colors"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <select
            required
            className="w-full bg-[#0a0b0a] border-b border-brand-gold/30 p-4 text-white focus:outline-none focus:border-brand-gold transition-colors appearance-none cursor-pointer"
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            defaultValue=""
          >
            <option value="" disabled>Hizmet Seçin</option>
            <option value="Saç Kesimi">Saç Kesimi</option>
            <option value="Sakal Tasarımı">Sakal Tasarımı</option>
            <option value="Saç & Sakal">Saç & Sakal Komple</option>
            <option value="Cilt Bakımı">Medikal Cilt Bakımı</option>
            <option value="Manikür / Pedikür">Manikür / Pedikür</option>
            <option value="Damat Paketi">VIP Damat Paketi</option>
          </select>

          <input
            type="text"
            required
            placeholder="Tarih / Saat Tercihi (Orn: Yarın 14:00)"
            className="w-full bg-transparent border-b border-brand-gold/30 p-4 text-white focus:outline-none focus:border-brand-gold transition-colors"
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />

          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-brand-gold text-brand-black px-8 py-5 uppercase font-bold text-[11px] tracking-[0.2em] rounded border border-brand-gold hover:bg-transparent hover:text-brand-gold transition-colors flex justify-center items-center gap-3"
            >
              Koltuğunu Ayırt <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
            <p className="text-gray-500 text-[10px] text-center mt-4 tracking-widest uppercase">Talebiniz doğrudan bize iletilecektir.</p>
          </div>
        </form>
      </div>
    </section>
  );
}
