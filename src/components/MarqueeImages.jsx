import buku1 from "../assets/buku1.png";
import buku2 from "../assets/buku2.png";
import buku3 from "../assets/buku3.png";
import buku4 from "../assets/buku4.png";
import buku5 from "../assets/buku5.png";
import buku6 from "../assets/buku6.png";
import buku7 from "../assets/buku7.png";
import buku8 from "../assets/buku8.png";
import buku9 from "../assets/buku9.png";
import buku10 from "../assets/buku10.png";
import buku11 from "../assets/buku11.png";
import buku12 from "../assets/buku12.png";
import buku13 from "../assets/buku13.png";
import buku14 from "../assets/buku14.png";
import buku15 from "../assets/buku15.png";
import buku16 from "../assets/buku16.png";
import buku17 from "../assets/buku17.png";
import buku18 from "../assets/buku18.png";
import buku19 from "../assets/buku19.png";
import buku20 from "../assets/buku20.png";
import buku21 from "../assets/buku21.png";

export function MarqueeImages() {
  const images = [
    buku1, buku2, buku3, buku4, buku5, buku6, buku7,
    buku8, buku9, buku10, buku11, buku12, buku13, buku14,
    buku15, buku16, buku17, buku18, buku19, buku20, buku21,
  ];

  return (
    <div className="relative flex flex-col gap-4 h-full justify-center overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-transparent">
      
      {/* Baris 1 - cepat */}
      <div className="flex gap-2 animate-marquee-fast whitespace-nowrap">
        {[...images.slice(0, 7), ...images.slice(0, 7), ...images.slice(0, 7), ...images.slice(0, 7)].map((src, i) => (
          <img key={`baris1-${i}`} src={src} alt={`cover-${i}`}
            className="aspect-[2/3] w-[clamp(6rem,8vw,9rem)] object-cover rounded-xl shadow-sm flex-shrink-0" />
        ))}
      </div>

      {/* Baris 2 - lambat, arah reverse */}
      <div className="flex gap-2 animate-marquee-reverse-slow whitespace-nowrap">
        {[...images.slice(7, 14), ...images.slice(7, 14), ...images.slice(7, 14), ...images.slice(7, 14)].map((src, i) => (
          <img key={`baris2-${i}`} src={src} alt={`cover-${i}`}
            className="aspect-[2/3] w-[clamp(6rem,8vw,9rem)] object-cover rounded-xl shadow-sm flex-shrink-0" />
        ))}
      </div>

      {/* Baris 3 - medium */}
      <div className="flex gap-2 animate-marquee-medium whitespace-nowrap">
        {[...images.slice(14, 21), ...images.slice(14, 21), ...images.slice(14, 21), ...images.slice(14, 21)].map((src, i) => (
          <img key={`baris3-${i}`} src={src} alt={`cover-${i}`}
            className="aspect-[2/3] w-[clamp(6rem,8vw,9rem)] object-cover rounded-xl shadow-sm flex-shrink-0" />
        ))}
      </div>
    </div>
  );
}

