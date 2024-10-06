"use client";

import React from 'react'
import Image from 'next/image';
import EducateCard from '../components/ui/EducateCard';

const EducationPage = () => {

  const data = [
    {
      grade: "Elementary School", 
      benefits: [
        "Benefit 1", "Benefit 2", "Benefit 3",
      ]
    },
    {
      grade: "High School", 
      benefits: [
        "Benefit 1", "Benefit 2", "Benefit 3",
      ]
    },
    {
      grade: "University", 
      benefits: [
        "Benefit 1", "Benefit 2", "Benefit 3",
      ]
    },
  ]

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
        <div className="flex flex-wrap justify-center gap-6 py-10">
          {data.map((card, index) => (
            <EducateCard
              key={index}
              grade={card.grade}
              benefits={card.benefits}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationPage;