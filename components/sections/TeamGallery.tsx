"use client";
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";

const team = [
  { name: "Patron", role: "Master Barber & Kurucu", img: "/images/calisan-1.jpg" },
  { name: "Eren", role: "Fade & Sakal Mimarı", img: "/images/calisan-2.jpg" },
  { name: "Ali", role: "Geleneksel Makas Ustası", img: "/images/calisan-3.jpg" },
  { name: "Burak", role: "Renklendirme & Şekillendirme", img: "/images/calisan-4.jpg" },
  { name: "Yigit", role: "VIP Bakım Uzmanı", img: "/images/calisan-5.jpg" },
  { name: "Kaan", role: "Sakal & Cilt Bakımı", img: "/images/calisan-6.jpg" }
];

export default function TeamGallery() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith('/en');

  return (
    <section id="team" className="py-32 bg-[#090909] px-6 relative border-t border-brand-gold/5 overflow-hidden">
      <div className="ambient-glow-gold -left-20 top-20 opacity-20 hidden md:block"></div>

      <div className="max-w-7xl mx-auto text-center mb-20 relative z-20">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-gold tracking-[0.2em] text-sm uppercase mb-4"
        >
          {isEn ? "Master Barbers" : "Usta Eller"}
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-serif text-4xl md:text-5xl text-white"
        >
          {isEn ? "Meet The Team" : "Ekibimiz"}
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 relative z-20">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.8 }}
            className="w-full sm:w-[45%] md:w-[30%] lg:w-[28%] aspect-[3/4] rounded-[2rem] overflow-hidden relative group cursor-pointer border border-white/5 shadow-2xl"
          >
            <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-700 text-left">
              <span className="text-brand-gold text-[10px] uppercase font-bold tracking-widest block mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">{member.role}</span>
              <h3 className="font-serif text-2xl text-white">{member.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
