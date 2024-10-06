import React from "react";
import Image from "next/image";

import { IoPlanetOutline,IoSpeedometerOutline,IoSearch } from "react-icons/io5";
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

  //   let exo2 = {
  //     name: "51 Pegasi b",
  //     description:
  //       "51 Pegasi b is a gas giant exoplanet that orbits a G-type star. Its mass is 0.46 Jupiters, it takes 4.2 days to complete one orbit of its star, and is 0.0527 AU from its star. Its discovery was announced in 1995.",
  //     planet_radius: "1.27 x Jupiter (estimate)",
  //     planet_type: "Gas Giant",
  //     discovery_method: "Radial Velocity",
  //     planet_mass: "0.46 Jupiters",
  //     discovery_date: 1995,
  //     orbital_radius: "0.0527 AU",
  //     orbital_period: "4.2 days",
  //     eccentricity: 0.01,
  //   };

  return (
    <div className="flex flex-col w-[70%] mx-auto gap-y-20">
      <div className="flex flex-row gap-x-20">
        <Image
          src={exoplanet.image}
          alt="Descripción de la imagen"
          width={600}
          height={300}
        />
        <div className="flex flex-col items-center">
          <p>{exoplanet.nombre}</p>
          <span className="break-words w-[420px]">{exoplanet.description}</span>
        </div>
      </div>
      <ul className="grid grid-cols-3 w-full gap-6">
        <li className="">
          <IoPlanetOutline className="inline" /> Planet radius:{" "}
          {exoplanet.planet_radius}
        </li>
        <li><IoSearch className="inline"/>Discovery method:{exoplanet.discovery_method}</li>
        <li><TbWeight className="inline"/>Planet mass {exoplanet.planet_mass}</li>
        <li><MdDateRange className="inline"></MdDateRange> Discovery date{exoplanet.discovery_date}</li>
        <li><LuOrbit className="inline"></LuOrbit> Orbital radius: {exoplanet.orbital_radius}</li>
        <li><IoSpeedometerOutline className="inline"/>Orbital period:{exoplanet.orbital_period}</li>
        <li><TbArrowCurveLeft className="inline"/>Eccentricity: {exoplanet.eccentricity}</li>
      </ul>
    </div>
  );
}
