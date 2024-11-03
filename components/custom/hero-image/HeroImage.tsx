// src/components/custom/hero-image/HeroImage.tsx

import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const HeroImage = () => (
  <div className="relative w-full h-auto overflow-hidden mt-10 ">
    <Image
      width={1920}
      height={600}
      src="https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Imagen destacada"
      className="object-cover rounded-lg h-48 contrast-125"
    />
    {/* Efecto de oscuridad en los lados izquierdo y derecho con gradiente */}
    <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-slate-800/90 via-orange-400/30 to-transparent rounded-l-lg"></div>
    <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-slate-800/90 to-transparent rounded-r-lg"></div>

    {/* Contenedor de íconos de redes sociales */}
    <div className="absolute right-0 bottom-4 bg-card/50 backdrop-blur-xl rounded-lg shadow-lg p-2 flex space-x-2 border mr-4">
      {/* Icono de Facebook */}
      <div className="flex items-center justify-center w-8 h-8 bg-card/40 rounded-full border border-white/10 hover:bg-blue-600 transition-colors">
        <FaFacebookF className="text-white" />
      </div>
      {/* Icono de Twitter */}
      <div className="flex items-center justify-center w-8 h-8 bg-card/40 rounded-full border border-white/10 hover:bg-blue-400 transition-colors">
        <FaTwitter className="text-white" />
      </div>
      {/* Icono de Instagram */}
      <div className="flex items-center justify-center w-8 h-8 bg-card/40 rounded-full border border-white/10 hover:bg-pink-500 transition-colors">
        <FaInstagram className="text-white" />
      </div>
      {/* Icono de LinkedIn */}
      <div className="flex items-center justify-center w-8 h-8 bg-card/40 rounded-full border border-white/10 hover:bg-blue-700 transition-colors">
        <FaLinkedinIn className="text-white" />
      </div>
    </div>
  </div>
);

export default HeroImage;
