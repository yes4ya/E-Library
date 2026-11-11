import { motion } from 'framer-motion';
import { Facebook, Twitter, Send } from 'lucide-react';
import ebookLogo from '../assets/ebooklogo.png';

export function Footer() {
  return (
    <motion.footer
      className="
        relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700
        text-white font-sans
      "
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container py-16 grid lg:grid-cols-4 gap-12">
        {/* Brand */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-3">
            <img
              src={ebookLogo}
              alt="E-Book Logo"
              className="w-10 h-10 rounded-lg object-contain"
            />
            <h4 className="text-[20px] font-bold">E‑Book</h4>
          </div>
          <p className="text-[14px] leading-relaxed text-gray-200">
            Solusi literasi digital untuk pembaca modern.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Send].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.15 }}
                className="hover:text-secondary-yellow transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Produk */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h5 className="text-[18px] font-semibold mb-6">Produk</h5>
          <ul className="space-y-3">
            {['Fitur', 'Harga', 'Demo', 'FAQ'].map((item, i) => (
              <li key={i}>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="group text-[14px] transition-colors hover:text-secondary-yellow relative"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary-yellow transition-all group-hover:w-full"></span>
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Perusahaan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h5 className="text-[18px] font-semibold mb-6">Perusahaan</h5>
          <ul className="space-y-3">
            {['Tentang Kami', 'Blog', 'Karir', 'Kontak'].map((item, i) => (
              <li key={i}>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="group text-[14px] transition-colors hover:text-secondary-yellow relative"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary-yellow transition-all group-hover:w-full"></span>
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h5 className="text-[18px] font-semibold mb-6">Legal</h5>
          <ul className="space-y-3">
            {['Privasi', 'Syarat & Ketentuan', 'Kebijakan Cookie'].map((item, i) => (
              <li key={i}>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="group text-[14px] transition-colors hover:text-secondary-yellow relative"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary-yellow transition-all group-hover:w-full"></span>
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Divider + Copyright */}
      <div className="border-t border-white/20 mt-8">
        <div className="container py-6 text-center">
          <p className="text-[13px] text-gray-300">
            © 2025 E‑Book. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
