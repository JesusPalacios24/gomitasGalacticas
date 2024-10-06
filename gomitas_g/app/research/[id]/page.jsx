import React from "react";
import Image from "next/image";

// import { Inter } from '@next/font/google';

// const inter = Inter({ subsets: ['latin'] });

import {
  IoPlanetOutline,
  IoSpeedometerOutline,
  IoSearch,
} from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { TbWeight } from "react-icons/tb";
import { LuOrbit } from "react-icons/lu";
import { TbArrowCurveLeft } from "react-icons/tb";

export default function page() {
  let exoplanet = {
    id: 1,
    image:
      "https://th.bing.com/th/id/R.0a375cff18d2bee68f113e933257f693?rik=OYtoBYWSdIbnoA&pid=ImgRaw&r=0",
    clasification: "clasificacion",
    nombre: "Exoplaneta ur mom",
    description:
      "texto de exoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipkl",
    planet_radius: "1.27 x Jupiter (estimate)",
    planet_type: "Gas Giant",
    discovery_method: "Radial Velocity",
    planet_mass: "0.46 Jupiters",
    discovery_date: 1995,
    orbital_radius: "0.0527 AU",
    orbital_period: "4.2 days",
    eccentricity: 0.01,
  };

  return (
    <div className={`flex flex-col w-full bg-[#1c1b1d] gap-14`}>
      <div className="relative">
        <Image
          className="w-full h-[350px] object-cover"
          src={exoplanet.image}
          alt="Descripción de la imagen"
          width={600}
          height={300}
        />

        <div class="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#1c1b1d] to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1c1b1d] to-transparent"></div>
      </div>

      <div className="flex flex-row ">
        <div className="flex flex-col  gap-10 items-center w-1/2">
          <h1 className="text-[50px] font-light">{exoplanet.nombre}</h1>
          <p className="break-words w-[420px] font-light text-[16px]">
            {exoplanet.description}
          </p>
        </div> 

        <ul className="grid grid-cols-3  gap-6 ">
          <li className="flex flex-col gap-1 mx-auto px-8 ">
            <span className="text-center text-[26px] font-light">
              <IoPlanetOutline className="inline" /> Planet radius:{" "}
            </span>
            <span className="text-center text-[20px] font-light ">
              {exoplanet.planet_radius}
            </span>
          </li>
          <li className="flex flex-col gap-1 mx-auto px-8">
            <span className="text-center text-[26px] font-light">
              <IoSearch className="inline" /> Discovery method:
            </span>
            <span className="text-center text-[20px] font-light">
              {exoplanet.discovery_method}
            </span>
          </li>
          <li className="flex flex-col gap-1 mx-auto px-8">
            <span className="text-center text-[26px] font-light">
              <TbWeight className="inline" /> Planet mass:
            </span>
            <span className="text-center text-[20px] font-light">
              {exoplanet.planet_mass}
            </span>
          </li>
          <li className="flex flex-col gap-1 mx-auto px-8">
            <span className="text-center text-[26px] font-light">
              <MdDateRange className="inline" /> Discovery date:
            </span>
            <span className="text-center text-[20px] font-light">
              {exoplanet.discovery_date}
            </span>
          </li>
          <li className="flex flex-col gap-1 mx-auto px-8">
            <span className="text-center text-[26px] font-light">
              <LuOrbit className="inline" /> Orbital radius:
            </span>
            <span className="text-center text-[20px] font-light">
              {exoplanet.orbital_radius}
            </span>
          </li>
          <li className="flex flex-col gap-1 mx-auto px-8">
            <span className="text-center text-[26px] font-light">
              <IoSpeedometerOutline className="inline" /> Orbital period:
            </span>
            <span className="text-center text-[20px] font-light">
              {exoplanet.orbital_period}
            </span>
          </li>
          <li className="flex flex-col gap-1 mx-auto px-8">
            <span className="text-center text-[26px] font-light">
              <TbArrowCurveLeft className="inline" /> Eccentricity:
            </span>
            <span className="text-center text-[20px] font-light">
              {exoplanet.eccentricity}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
