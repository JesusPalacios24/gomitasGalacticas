"use client"; // Asegúrate de marcar este componente como Client Component
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
        className={`relative flex justify-between items-center px-24  text-lg transition-all duration-500 ease-in-out ${
          isScrolled ? "py-2" : "py-6"
        }`}
      >
        <div className="relative ">
          <a href="/" className={`absolute top-[-70px] ${isScrolled ? "text-white" : "text-white"}`}>
            <Image
              //   isZoomed
              width={110}
              height={110}
              className="object-cover ml-24"
              // alt="NextUI Fruit Image with Zoom"
              src="/logo.png"
            />
          </a>
        </div>

        {/* links */}
        <div className="flex gap-10">
          <a href="/" className={isScrolled ? "text-white" : "text-white"}>
            Home
          </a>
          <a href="" className={isScrolled ? "text-white" : "text-white"}>
            Introduction
          </a>
          <a href="/exoplanets" className={isScrolled ? "text-white" : "text-white"}>
            Content
          </a>
          <a href="/education" className={isScrolled ? "text-white" : "text-white"}>
            Education
          </a>
          <a href="/research" className={isScrolled ? "text-white" : "text-white"}>
            Research
          </a>
          <Button
            className={`rounded-full px-8 ${
              isScrolled ? "text-white hover:text-white" : "text-white"
            }`}
            variant="ghost"
            onClick={() => window.location.href = '/login'} // Redirige a la página de login
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
