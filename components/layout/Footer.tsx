"use client";
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Footer() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith('/en');

  return (
    <footer className="bg-brand-black pt-24 pb-12 px-6 border-t border-brand-gold/20 relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

        <div className="md:col-span-1">
          <img
            src="/images/logo.png"
            alt="Patron Erkek Kuaförü"
            className="h-24 md:h-32 w-auto object-contain mb-8"
          />
          <p className="font-sans text-gray-500 text-sm leading-relaxed mb-6">
            {isEn
              ? "Bornova’s luxury destination for gentlemen who value themselves."
              : "Bornova’nın kalbinde, kendine değer veren erkeklerin lüks durağı."}
          </p>
          <h4 className="font-sans text-white uppercase tracking-widest text-sm mb-6">
            {isEn ? "SocIals" : "Sosyal Medya"}
          </h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/patronkuafor/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-brand-gold hover:border-brand-gold transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.facebook.com/patronkuafor" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-brand-gold hover:border-brand-gold transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://maps.app.goo.gl/share_link" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-brand-gold hover:border-brand-gold transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <h4 className="font-sans text-white uppercase tracking-widest text-sm mb-6">
            {isEn ? "Menu" : "Hızlı Menü"}
          </h4>
          <ul className="flex flex-col gap-4 font-sans text-sm text-gray-500">
            <li><a href="#about" className="hover:text-brand-gold transition-colors">{isEn ? "About Us" : "Hakkımızda"}</a></li>
            <li><a href="#team" className="hover:text-brand-gold transition-colors">{isEn ? "Our Team" : "Ekibimiz"}</a></li>
            <li><a href="#services" className="hover:text-brand-gold transition-colors">{isEn ? "Services" : "Hizmetlerimiz"}</a></li>
            <li><a href="#pricing" className="hover:text-brand-gold transition-colors">{isEn ? "Pricing" : "Fiyatlar"}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-white uppercase tracking-widest text-sm mb-6">
            {isEn ? "Contact" : "İletişim"}
          </h4>
          <ul className="flex flex-col gap-4 font-sans text-sm text-gray-500">
            <li><a href="tel:+905535737992" className="hover:text-brand-gold">+90 553 573 79 92</a></li>
            <li>Kazımdirik Mah. Folkart Incity 296/2 Sk. No.2/D, Bornova/İzmir</li>
            <li className="text-brand-gold cursor-pointer mt-2 hover:underline">
              <a href="https://maps.app.goo.gl/share_link" target="_blank" rel="noopener noreferrer">
                {isEn ? "Show on Map →" : "Haritada Göster →"}
              </a>
            </li>
          </ul>
        </div>

        {/* New Column: Hours */}
        <div>
          <h4 className="font-sans text-white uppercase tracking-widest text-sm mb-6">
            {isEn ? "WorkIng Hours" : "Çalışma Saatleri"}
          </h4>
          <ul className="flex flex-col gap-2 font-sans text-sm text-gray-500">
            <li className="flex justify-between"><span>{isEn ? "Monday" : "Pazartesi"}</span> <span className="text-white">10:00 - 20:00</span></li>
            <li className="flex justify-between"><span>{isEn ? "Tuesday" : "Salı"}</span> <span className="text-white">10:00 - 20:00</span></li>
            <li className="flex justify-between"><span>{isEn ? "Wednesday" : "Çarşamba"}</span> <span className="text-white">10:00 - 20:00</span></li>
            <li className="flex justify-between"><span>{isEn ? "Thursday" : "Perşembe"}</span> <span className="text-white">10:00 - 20:00</span></li>
            <li className="flex justify-between"><span>{isEn ? "Friday" : "Cuma"}</span> <span className="text-white">10:00 - 20:00</span></li>
            <li className="flex justify-between"><span>{isEn ? "Saturday" : "Cumartesi"}</span> <span className="text-white">10:00 - 20:00</span></li>
            <li className="flex justify-between"><span>{isEn ? "Sunday" : "Pazar"}</span> <span className="text-brand-gold">{isEn ? "Closed" : "Kapalı"}</span></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[10px] text-gray-600 font-sans tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} Patron Erkek Kuaförü.</p>
        <p className="mt-4 md:mt-0">{isEn ? "All RIghts Reserved." : "Tüm hakları saklıdır."}</p>
      </div>
    </footer>
  );
}
