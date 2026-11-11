import { motion } from "framer-motion";
import { User } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sri Wahyuni, S.Pd",
      role: "Guru Bahasa Indonesia",
      content: "E‑Book membuat siswa lebih semangat membaca dengan akses digital yang mudah.",
    },
    {
      name: "Dr. Budi Santoso",
      role: "Pengawas Pendidikan",
      content: "Platform e‑book ini solusi literasi digital terbaik yang pernah saya lihat.",
    },
    {
      name: "Rina Kartika",
      role: "Mahasiswa",
      content: "Saya bisa membaca kapan saja, bahkan offline. Sangat membantu proses belajar.",
    },
    {
      name: "Drs. Ahmad Budiman, M.Pd",
      role: "Kepala Sekolah",
      content: "E‑Book telah mengubah cara kami mengelola koleksi bacaan di sekolah.",
    },
    {
      name: "Hendra Wijaya",
      role: "Pustakawan",
      content: "Integrasi statistik membaca sangat memudahkan monitoring kebiasaan literasi siswa.",
    },
  ];

  const [emblaRef] = useEmblaCarousel(
    { loop: true, slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  return (
    <section className="relative py-20 bg-white font-sans overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-white" />

      <div className="px-6 lg:px-20 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block bg-secondary-yellow/10 px-4 py-1.5 rounded-full mb-6 border border-secondary-yellow/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-sm md:text-base font-medium uppercase tracking-wide text-secondary-yellow">
              Testimoni
            </p>
          </motion.div>
          <h2 className="text-[28px] md:text-[36px] font-bold leading-tight mb-3 text-text-black">
            Dipercaya oleh Ribuan Pembaca
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Dengar langsung pengalaman pengguna E‑Book
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="overflow-hidden pt-6 pb-12" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] lg:flex-[0_0_33.333%] px-3"
              >
                <motion.div
                  className="bg-white shadow-md p-6 rounded-xl border border-gray-200 
                             transition-all flex flex-col justify-between h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -6,
                    boxShadow: "0 0 25px rgba(6,71,163,0.25)",
                    zIndex: 10,
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-secondary-yellow rounded-full flex items-center justify-center shrink-0">
                      <User className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-text-black">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-sm text-gray-700 leading-relaxed">
                    "{t.content}"
                  </blockquote>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
