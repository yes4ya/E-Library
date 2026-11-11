import { Navbar } from './components/Navbar';
import { MarqueeImages } from './components/MarqueeImages';
import { LandingHero } from './components/LandingHero';
import { FeaturesSection } from './components/FeaturesSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { FloatingLogo } from './components/FloatingLogo';
import { DownloadSection } from './components/DownloadSection';

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-white">
      <Navbar />

      <main className="space-y-0">
        {/* Hero Section = Beranda */}
        <section
          id="beranda"
          className="relative w-full bg-white overflow-visible h-auto lg:h-screen"
        >
          {/* Marquee */}
          <div className="lg:h-[60%] relative">
            <MarqueeImages />
            {/* Fade putih tebal */}
            <div
              className="absolute bottom-0 left-0 w-full h-40
                         bg-gradient-to-t from-white via-white/10 to-transparent
                         pointer-events-none z-30"
            />
          </div>

          {/* Logo muter */}
          <FloatingLogo />

          {/* Hero teks */}
          <div className="flex items-center z-10 pb-8 lg:pb-12">
            <LandingHero />
          </div>
        </section>

        {/* Fitur */}
        <section id="fitur" className="relative z-20 bg-white">
          <FeaturesSection />
        </section>

        {/* Tentang */}
        <section id="tentang" className="relative z-20 bg-white">
          <AboutSection />
        </section>

        {/* Testimoni */}
        <section id="testimoni" className="relative z-20 bg-white">
          <TestimonialsSection />
        </section>

        {/* Download */}
        <section id="download" className="relative z-20 bg-white">
          <DownloadSection />
        </section>
      </main>

      {/* Footer background pastel */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#FFF9E6] via-[#FFF9E6] to-white -z-10" />

      <Footer />
    </div>
  );
}
