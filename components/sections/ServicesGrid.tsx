"use client";
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";

export default function ServicesGrid() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith('/en');

  const services = [
    {
      title: isEn ? "Hair & Beard" : "Saç & Sakal",
      subtitle: isEn ? "ArtIsan's Touch" : "Sanatkarın Dokunuşu",
      image: "/images/action.jpg",
      desc: isEn ? "Beyond a classic cut it's a design tailored to your facial features and bone structure." : "Klasik bir kesimin ötesinde, yüz hatlarına ve kemik stiline özel tasarım."
    },
    {
      title: isEn ? "Manicure & Pedicure" : "Manikür & Pedikür",
      subtitle: isEn ? "Hands Matter" : "Eller Önemli",
      image: "/images/manicure.jpg",
      desc: isEn ? "Elegance hidden in the details. Flawless hand and foot care." : "Ayrıntılarda gizli bir zarafet. Kusursuz el ve ayak bakımı."
    },
    {
      title: isEn ? "Medical Skin Care" : "Medikal Cilt Bakımı",
      subtitle: isEn ? "Deep CleanIng" : "Derinlemesine Temizlik",
      image: "/images/skincare.jpg",
      desc: isEn ? "A new era for your face with ozonated steam, pore cleansing, and rejuvenating masks." : "Ozonlu buhar, gözenek temizliği ve gençleştirici maskelerle yüzünüzde yeni bir çağ."
    }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-[#0f1110] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold tracking-[0.2em] text-sm uppercase mb-4"
          >
            {isEn ? "Masterclass" : "Önde Gelen"}
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl text-white"
          >
            {isEn ? "Services" : "Hizmetlerimiz"}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="w-full aspect-[3/4] overflow-hidden bg-brand-black mb-6 relative border border-brand-gold/5">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-in-out grayscale group-hover:grayscale-0"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80"></div>

                {/* Overlay Text showing on hover on desktop */}
                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-brand-gold text-sm tracking-widest uppercase mb-2">{service.subtitle}</p>
                  <h3 className="font-serif text-2xl text-white">{service.title}</h3>
                </div>
              </div>

              <div className="px-2">
                <p className="font-sans text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-4 w-12 h-px bg-brand-gold/50 group-hover:w-full transition-all duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
