// src/components/custom/hero-image/HeroImage.tsx

import Image from "next/image";

const HeroImage = () => (
  <div className="relative w-full h-auto overflow-hidden mt-20 px-4">
    <Image
      width={1920}
      height={600}
      src="/"
      alt="Imagen destacada"
      className="object-cover rounded-lg"
    />
    <div className="absolute inset-0 bg-black/90 opacity-50 rounded-lg mx-4 h-80 w-auto"></div>
  </div>
);

export default HeroImage;
