"use client"; // Asegúrate de marcar este componente como Client Component
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para manejar el menú en móviles

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-20 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-black bg-opacity-30 text-zinc-400"
          : "bg-transparent text-white"
      }`}
    >
      <div
        className={`relative flex justify-between items-center px-6 md:px-24 text-lg transition-all duration-500 ease-in-out ${
          isScrolled ? "py-2" : "py-6"
        }`}
      >
        <div className="relative">
          <a href="/" className={`absolute top-[-70px] ${isScrolled ? "text-white" : "text-white"}`}>
            <Image
              width={110}
              height={110}
              className="object-cover"
              src="/logo.png"
            />
          </a>
        </div>

        {/* Botón de menú para móviles */}
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰ {/* Icono de hamburguesa */}
          </button>
        </div>

        {/* Links del menú, ocultos en móviles y mostrados en pantallas más grandes */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-black bg-opacity-80 md:bg-transparent md:static md:w-auto md:flex gap-10 md:gap-10 transition-all duration-300 md:items-center`}
        >
          <a
            href="#"
            className={`block md:inline-block px-4 py-2 ${isScrolled ? "text-white" : "text-white"}`}
          >
            Home
          </a>
          <a
            href="#"
            className={`block md:inline-block px-4 py-2 ${isScrolled ? "text-white" : "text-white"}`}
          >
            Introduction
          </a>
          <a
            href="#"
            className={`block md:inline-block px-4 py-2 ${isScrolled ? "text-white" : "text-white"}`}
          >
            Content
          </a>
          <a
            href="#"
            className={`block md:inline-block px-4 py-2 ${isScrolled ? "text-white" : "text-white"}`}
          >
            Education
          </a>
          <a
            href="#"
            className={`block md:inline-block px-4 py-2 ${isScrolled ? "text-white" : "text-white"}`}
          >
            Research
          </a>
          <Button
            className={`rounded-full px-8 block md:inline-block ${
              isScrolled ? "text-white hover:text-white" : "text-white"
            }`}
            variant="ghost"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
