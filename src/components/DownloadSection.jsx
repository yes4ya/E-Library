import { motion } from "framer-motion";
import playBadge from "../assets/playstore.svg";
import appStoreBadge from "../assets/appstore.svg";

export function DownloadSection() {
  return (
    <section className="relative bg-white py-24">
      <div className="container mx-auto flex flex-col items-center text-center">
        
        {/* Card dengan efek glass + gradient bergerak */}
        <motion.div
          className="glass w-full max-w-3xl text-white px-10 py-14 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Layer gradient bergerak */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 animate-gradient-x rounded-3xl" />

          {/* Konten di atas gradient */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            <motion.h2
              className="text-3xl lg:text-4xl font-bold mb-4 drop-shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Unduh Aplikasi E‑Book
            </motion.h2>

            <motion.p
              className="text-lg text-gray-200 max-w-xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Nikmati ribuan koleksi e‑book langsung dari smartphone kamu.
            </motion.p>

            <motion.div
              className="flex flex-col lg:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="inline-block shadow-lg shadow-blue-500/40 rounded-lg"
              >
                <img src={playBadge} alt="Download di Google Play" className="h-14 w-auto" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, rotate: -1 }}
                className="inline-block shadow-lg shadow-blue-500/40 rounded-lg"
              >
                <img src={appStoreBadge} alt="Download di App Store" className="h-14 w-auto" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
