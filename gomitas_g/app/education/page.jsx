"use client";

import React from 'react'
import Image from 'next/image';

const EducationPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Fondo animado */}
      <div className="absolute inset-0 z-0">
        {/* Aquí va tu fondo animado */}
      </div>

      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-10">
        <Image 
          src="/Education-BG.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-20 align-items-center justify-center">
        {/* Aquí va todo el contenido de tu página */}
        <div className="">
          Card
        </div>
      </div>
    </div>
  );
};

export default EducationPage;