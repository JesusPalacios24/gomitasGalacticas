"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";

import exoplanets from '../../exoplanets'

// import { Inter } from '@next/font/google';

// const inter = Inter({ subsets: ['latin'] });

import {
  IoPlanetOutline,
  IoSpeedometerOutline,
  IoSearch,
} from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { TbWeight, TbArrowCurveLeft } from "react-icons/tb";
import { LuOrbit } from "react-icons/lu";

export default function Page({params}) {

  const [exoplanet,setExoplanet] =useState({})
useEffect(() => {
  const planetFinded=exoplanets.find(planet=>planet.id==params.id)
  console.log(planetFinded)
  setExoplanet((prevExoplanet) => ({
    ...prevExoplanet,   // Mantén las propiedades anteriores
    ...planetFinded     // Agrega las propiedades de planetFinded
  }));
},[])

console.log(exoplanet)

  const dataToShow = [
    {
      icon: <IoPlanetOutline className="inline" />,
      description: "Planet radius:",
      data: exoplanet.planet_radius,
    },
    {
      icon: <IoSearch className="inline" />,
      description: "Discovery method:",
      data: exoplanet.discovery_method,
    },
    {
      icon: <TbWeight className="inline" />,
      description: "Planet mass:",
      data: exoplanet.planet_mass,
    },
    {
      icon: <MdDateRange className="inline" />,
      description: "Discovery date:",
      data: exoplanet.discovery_date,
    },
    {
      icon: <LuOrbit className="inline" />,
      description: "Orbital radius:",
      data: exoplanet.orbital_radius,
    },
    {
      icon: <IoSpeedometerOutline className="inline" />,
      description: "Orbital period:",
      data: exoplanet.orbital_period,
    },
    {
      icon: <TbArrowCurveLeft className="inline" />,
      description: "Eccentricity:",
      data: exoplanet.eccentricity,
    }, 
  ];

  return (
    <div className="flex flex-col w-full  gap-14 pb-[150px]">
      <div className="relative">
        <Image
          className="w-full h-[350px] object-cover"
          src={exoplanet.image}
          alt="Descripción de la imagen"
          width={600}
          height={300}
        />

        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#1c1b1d] to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1c1b1d] to-transparent"></div>
      </div>

      <div className="flex flex-row ">
        <div className="flex flex-col gap-10 items-center w-1/2">
          <h1 className="text-[50px] font-light">{exoplanet.name}</h1>
          <p className="break-words w-[420px] font-light text-[16px]">
            {exoplanet.description}
          </p>
        </div>

        <ul className="w-[45%] grid grid-cols-3 gap-0 relative top-[16px]">
          {dataToShow.map((data, index) => (
            <ShowData key={index} data={data} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function ShowData({ data }) {
  return (
    <li className="flex flex-col gap-1 mx-auto px-8">
      <span className="text-center text-[22px] font-light">
        {data.icon} {data.description}
      </span>
      <span className="text-center text-[16px] text-zinc-400 font-light">{data.data}</span>
    </li>
  );
}
