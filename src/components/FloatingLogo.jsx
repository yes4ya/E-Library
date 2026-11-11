import ebookLogo from "../assets/ebooklogo.png";

export function FloatingLogo() {
  return (
    <div className="absolute top-[60%] inset-x-0 -translate-y-1/2 z-40 pointer-events-none">
      <div className="container flex justify-end">
        <div
          className="hidden lg:flex circle-fluid rounded-full bg-brand-blue shadow-brand-glow items-center justify-center
                     animate-spin-slow hover:animate-spin-reverse transition-transform duration-300 pointer-events-auto"
        >
          <img
            src={ebookLogo}
            alt="E-Book Logo"
            className="logo-fluid object-contain"
          />
        </div>
      </div>
    </div>
  );
}
