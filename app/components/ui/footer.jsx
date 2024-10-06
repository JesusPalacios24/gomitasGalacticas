import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo y texto */}
        <div className="text-left">
          <h3 className="text-h3 font-thin">ExoFinder</h3>
          {/* Pie de página con derechos reservados */}
          <div className="text-zinc-500 text-xs mt-2">
            &copy; 2024 ExoFinder Co. All Rights Reserved.
          </div>
        </div>

        {/* Enlaces de navegación y redes sociales */}
        <div className="flex flex-col items-center ml-4 m-4"> 
          {/* Enlaces de navegación */} 
          <ul className="flex space-x-4 mb-2"> {/* Cambiado a mb-2 para reducir el margen entre los enlaces y los íconos */}
            <li>
              <a href="/about" className="text-zinc-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/explore" className="text-zinc-400 hover:text-white">
                Explore
              </a>
            </li>
            <li>
              <a href="/contact" className="text-zinc-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>

          {/* Íconos de redes sociales */}
          <div className="flex space-x-6">
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebook className="text-2xl text-zinc-400 hover:text-white" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter className="text-2xl text-zinc-400 hover:text-white" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram className="text-2xl text-zinc-400 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
