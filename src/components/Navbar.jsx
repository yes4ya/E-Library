import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ebookLogo from '../assets/ebooklogo.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Beranda','Fitur','Tentang','Testimoni','Download'];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md font-sans"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
            <img src={ebookLogo} alt="E-Book Logo" className="w-10 h-10 rounded-lg object-contain" />
            <h4 className="text-primary-blue text-[20px] font-bold">E-Book</h4>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="text-black hover:text-primary-blue text-[16px] transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.button className="text-primary-blue hover:text-blue-800 text-[16px] transition-colors">
              Masuk
            </motion.button>
            <motion.button className="bg-secondary-yellow hover:bg-orange-500 text-white px-6 py-3 rounded-lg text-[16px] transition-colors">
              Daftar Gratis
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-20 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-t border-white/20 px-6 py-6 flex flex-col gap-4 rounded-b-lg shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="text-black hover:text-primary-blue text-[16px] transition-colors py-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </motion.a>
            ))}

            <button className="bg-primary-blue hover:bg-blue-800 text-white px-6 py-3 rounded-lg text-[16px] transition-colors transform hover:-translate-y-1">
              Masuk
            </button>
            <button className="bg-secondary-yellow hover:bg-orange-500 text-white px-6 py-3 rounded-lg text-[16px] transition-colors transform hover:-translate-y-1">
              Daftar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
