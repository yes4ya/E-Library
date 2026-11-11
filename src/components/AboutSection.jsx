import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import BukuAbout from "../assets/BukuAbout.json"; // tetap sama

export function AboutSection() {
  const benefits = [
    "Hemat biaya cetak dengan koleksi digital",
    "Akses 24/7 ke ribuan e‑book",
    "Bookmark & catatan pribadi untuk setiap bacaan",
    "Sinkronisasi lintas perangkat (HP, tablet, laptop)",
    "Ramah lingkungan dengan mengurangi penggunaan kertas",
    "Statistik membaca untuk memantau progres literasi",
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#FFF9E6] via-[#FFF9E6] to-white font-sans">
      <div className="grid lg:grid-cols-2 gap-16 items-center px-6 lg:px-20 max-w-7xl mx-auto">
        
        {/* Kiri: animasi BukuAbout */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0], scale: [1, 1.01, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-full max-w-sm"
          >
            <Lottie animationData={BukuAbout} loop autoplay className="w-full h-auto" />
          </motion.div>
        </motion.div>

        {/* Kanan: konten */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-block bg-white text-secondary-yellow px-4 py-1.5 rounded-full shadow-sm">
            <p className="text-sm md:text-base font-medium uppercase tracking-wide">
              Tentang Platform
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-[30px] md:text-[38px] font-bold text-text-black leading-tight">
            Revolusi Membaca dengan Teknologi Digital
          </h2>

          {/* Subtext */}
          <p className="text-base md:text-lg text-gray-700 max-w-md">
            E‑Book adalah solusi literasi digital yang dirancang untuk pembaca modern, menghadirkan pengalaman membaca yang lebih fleksibel dan interaktif.
          </p>

          {/* Benefit list */}
          <div className="space-y-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-7 h-7 bg-secondary-green-bg rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-secondary-green" />
                </div>
                <p className="text-base md:text-lg text-text-black">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(6,71,163,0.35)" }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="btn-primary flex items-center gap-2 mt-8"
          >
            <span>Baca Sekarang</span>
            <motion.div whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 300 }}>
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
