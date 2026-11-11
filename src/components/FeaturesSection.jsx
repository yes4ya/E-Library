import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { BookOpen, FileText, ClipboardList, Bell, BarChart3, Settings } from "lucide-react";
import BukuLandingHero from "../assets/BukuLandingHero.json"; // tetap pakai file ini

const features = [
  { icon: <BookOpen className="w-8 h-8 text-primary-blue" />, title: "Koleksi E‑Book", desc: "Akses ribuan e‑book kapan saja, di mana saja." },
  { icon: <FileText className="w-8 h-8 text-secondary-yellow" />, title: "Baca Offline", desc: "Unduh e‑book favorit untuk dibaca tanpa koneksi internet." },
  { icon: <ClipboardList className="w-8 h-8 text-secondary-green" />, title: "Bookmark & Catatan", desc: "Simpan halaman penting dan tambahkan catatan pribadi." },
  { icon: <Bell className="w-8 h-8 text-secondary-red" />, title: "Pengingat Bacaan", desc: "Notifikasi otomatis untuk melanjutkan bacaan atau jadwal belajar." },
  { icon: <BarChart3 className="w-8 h-8 text-primary-blue" />, title: "Statistik Membaca", desc: "Pantau progres membaca dan analitik kebiasaan literasi." },
  { icon: <Settings className="w-8 h-8 text-secondary-yellow" />, title: "Kustomisasi Tampilan", desc: "Sesuaikan tema, font, dan layout sesuai preferensi Anda." },
];

export function FeaturesSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-[#FFF9E6]/60 to-[#FFF9E6] py-16 px-6 lg:px-20 font-sans">
      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        
        {/* Kiri: daftar fitur */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          {/* Badge editorial */}
          <div className="inline-block bg-white px-4 py-1.5 rounded-full shadow-md">
            <p className="text-sm lg:text-base font-medium uppercase tracking-wide text-primary-blue">
              Fitur E‑Book
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-[30px] lg:text-[38px] font-bold text-text-black leading-tight">
            Membaca Jadi Lebih Interaktif
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, x: 3 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-12 h-12 flex items-center justify-center rounded-lg mb-4 bg-gray-100"
                >
                  {f.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-text-black mb-2 group-hover:text-primary-blue transition-colors">
                  {f.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Kanan: animasi Lottie */}
        <motion.div
          className="hidden lg:flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
        >
          <motion.div
            animate={{ y: [0, -12, 0], scale: [1, 1.02, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="w-full max-w-md lg:max-w-lg"
          >
            <Lottie animationData={BukuLandingHero} loop autoplay />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
