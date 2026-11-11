import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function LandingHero() {
  return (
    <div className="w-full px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-8 text-left">
        {/* Headline */}
        <h1 className="text-editorial-h1 font-bold leading-tight tracking-tightest text-gray-900 m-0">
          Platform E‑Book Modern
        </h1>

        {/* Subheadline */}
        <p className="text-editorial-p text-gray-600 m-0">
          Nikmati ribuan koleksi e‑book, akses instan di berbagai perangkat, dan pengalaman membaca yang interaktif.
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(6,71,163,0.35)" }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="btn-primary relative z-20 flex items-center gap-2 mt-6 mb-10
                     text-[16px] lg:text-[18px] px-6 lg:px-8 py-3 lg:py-4"
          aria-label="Mulai membaca e-book sekarang"
        >
          <span>Baca Sekarang</span>
          <motion.div
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}
