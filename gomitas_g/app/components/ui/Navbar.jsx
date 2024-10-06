"use client"; // Asegúrate de marcar este componente como Client Component
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";

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
      className={`sticky top-0 z-20 transition-all duration-300 ${
        isScrolled ? "bg-black bg-opacity-100" : "bg-transparent"
      }`}
    >
      <div className="relative flex justify-between items-center px-24 py-6 text-lg">
        <div>
          <a href="/" className={isScrolled ? "text-white" : "text-white"}>
            Logo
          </a>
        </div>

        {/* links */}
        <div className="flex gap-10">
          <a href="#" className={isScrolled ? "text-white" : "text-white"}>
            Home
          </a>
          <a href="#" className={isScrolled ? "text-white" : "text-white"}>
            Introduction
          </a>
          <a href="#" className={isScrolled ? "text-white" : "text-white"}>
            Content
          </a>
          <a href="#" className={isScrolled ? "text-white" : "text-white"}>
            Education
          </a>
          <a href="#" className={isScrolled ? "text-white" : "text-white"}>
            Research
          </a>
          <Button
            className={`rounded-full px-8 ${
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
