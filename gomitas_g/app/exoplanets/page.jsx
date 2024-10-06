"use client";
import { useState } from "react";
import ExoplanetCard from "../components/ui/ExoplanetCard";
// import Slider from "../components/ui/Slider";
import { Checkbox, Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";

// Datos de exoplanetas
let exoplanetsData = [
  {
      image: "https://science.nasa.gov/wp-content/uploads/2023/11/gasgiant-7.jpg?w=4096&format=jpeg",
      name: "51 Pegasi b",
      description: "51 Pegasi b is a gas giant exoplanet that orbits a G-type star. Its mass is 0.46 Jupiters, it takes 4.2 days to complete one orbit of its star, and is 0.0527 AU from its star. Its discovery was announced in 1995.",
      planet_radius: "1.27 x Jupiter (estimate)",
      planet_type: "Gas Giant",
      discovery_method: "Radial Velocity",
      planet_mass: "0.46 Jupiters",
      discovery_date: 1995,
      orbital_radius: "0.0527 AU",
      orbital_period: "4.2 days",
      eccentricity: 0.01,
      keywords: ["gas giant", "exoplanet", "51 Pegasi b", "orbital period", "Jupiter mass"]
  },
  {
      image: "https://science.nasa.gov/wp-content/uploads/2023/11/superearth-7.jpg?w=4096&format=jpeg",
      name: "Kepler-438 b",
      description: "Kepler-438 b is an Earth-sized exoplanet located about 475 light-years from Earth, in the habitable zone of its star.",
      planet_radius: "1.12 x Earth",
      planet_type: "Super Earth",
      discovery_method: "Transit",
      planet_mass: "1.46 Earths",
      discovery_date: 2015,
      orbital_radius: "0.166 AU",
      orbital_period: "35.2 days",
      eccentricity: 0.03,
      keywords: ["super Earth", "exoplanet", "habitable zone", "Kepler-438 b", "orbital period"]
  },
  {
      image: "https://science.nasa.gov/wp-content/uploads/2023/11/superearth-7.jpg?w=4096&format=jpeg",
      name: "Proxima Centauri b",
      description: "Proxima Centauri b is a super Earth exoplanet that orbits an M-type star. Its mass is 1.07 Earths, it takes 11.2 days to complete one orbit of its star, and is 0.04856 AU from its star. Its discovery was announced in 2016.",
      planet_radius: "1.03 x Earth (estimate)",
      planet_type: "Super Earth",
      discovery_method: "Radial Velocity",
      planet_mass: "1.07 Earths",
      discovery_date: 2016,
      orbital_radius: "0.04856 AU",
      orbital_period: "11.2 days",
      eccentricity: 0.02,
      keywords: ["super Earth", "Proxima Centauri b", "M-type star", "orbital period", "habitable zone"]
  },
  {
      image: "https://science.nasa.gov/wp-content/uploads/2024/03/Kepler22b.jpg?w=4096&format=jpeg",
      name: "Kepler-22 b",
      description: "A possible ocean world orbiting in the habitable zone—the region around a star where the temperature is right for liquid water, a requirement for life on Earth.",
      planet_radius: "2.1 x Earth",
      planet_type: "Super Earth",
      discovery_method: "Transit",
      planet_mass: "9.1 Earths",
      discovery_date: 2011,
      orbital_radius: "0.812 AU",
      orbital_period: "289.9 days",
      eccentricity: 0.72,
      keywords: ["ocean world", "habitable zone", "Kepler-22 b", "super Earth", "orbital period"]
  },
  {
      image: "https://science.nasa.gov/wp-content/uploads/2023/11/superearth-7.jpg?w=4096&format=jpeg",
      name: "K2-18 b",
      description: "K2-18 b is a super Earth exoplanet that orbits an M-type star. Its mass is 8.92 Earths, it takes 32.9 days to complete one orbit of its star, and is 0.1429 AU from its star. Its discovery was announced in 2015.",
      planet_radius: "2.37 x Earth",
      planet_type: "Super Earth",
      discovery_method: "Transit",
      planet_mass: "8.92 Earths",
      discovery_date: 2015,
      orbital_radius: "0.1429 AU",
      orbital_period: "32.9 days",
      eccentricity: 0.2,
      keywords: ["super Earth", "K2-18 b", "M-type star", "orbital period", "exoplanet"]
  },
  {
      image: "https://science.nasa.gov/wp-content/uploads/2023/11/superearth-7.jpg?w=4096&format=jpeg",
      name: "GJ 1002 b",
      description: "GJ 1002 b is a super Earth exoplanet that orbits an M-type star. Its mass is 1.08 Earths, it takes 10.3 days to complete one orbit of its star, and is 0.0457 AU from its star. Its discovery was announced in 2022.",
      planet_radius: "1.03 x Earth (estimate)",
      planet_type: "Super Earth",
      discovery_method: "Radial Velocity",
      planet_mass: "1.08 Earths",
      discovery_date: 2022,
      orbital_radius: "0.0457 AU",
      orbital_period: "10.3 days",
      eccentricity: null,
      keywords: ["super Earth", "GJ 1002 b", "M-type star", "orbital period", "exoplanet"]
  },
  {
      image: "https://science.nasa.gov/wp-content/uploads/2023/11/superearth-7.jpg?w=4096&format=jpeg",
      name: "GJ 1002 c",
      description: "GJ 1002 c is a super Earth exoplanet that orbits an M-type star. Its mass is 1.36 Earths, it takes 21.2 days to complete one orbit of its star, and is 0.0738 AU from its star. Its discovery was announced in 2022.",
      planet_radius: "1.1 x Earth (estimate)",
      planet_type: "Super Earth",
      discovery_method: "Radial Velocity",
      planet_mass: "1.36 Earths",
      discovery_date: 2022,
      orbital_radius: "0.0738 AU",
      orbital_period: "21.2 days",
      eccentricity: null,
      keywords: ["super Earth", "GJ 1002 c", "M-type star", "orbital period", "exoplanet"]
  },
  {
      image: "https://science.nasa.gov/wp-content/uploads/2023/11/terrestrial-4.jpg?w=4096&format=jpeg",
      name: "LHS 475 b",
      description: "LHS 475 b is a terrestrial exoplanet that orbits an M-type star. Its mass is 0.941 Earths and it takes 2 days to complete one orbit of its star. Its discovery was announced in 2023.",
      planet_radius: "0.991 x Earth",
      planet_type: "Terrestrial",
      discovery_method: "Transit",
      planet_mass: "0.941 Earths",
      discovery_date: 2023,
      orbital_radius: "0.02037 AU",
      orbital_period: "2 days",
      eccentricity: 0.0,
      keywords: ["terrestrial", "LHS 475 b", "M-type star", "orbital period", "exoplanet"]
  },
  {
      image: "https://science.nasa.gov/wp-content/uploads/2023/11/neptunelike-8.jpg?w=4096&format=jpeg",
      name: "GJ 1214 b",
      description: "GJ 1214 b is a Neptune-like exoplanet that orbits an M-type star. Its mass is 8.17 Earths, it takes 1.6 days to complete one orbit of its star, and is 0.0149 AU from its star. Its discovery was announced in 2009.",
      planet_radius: "0.244 x Jupiter",
      planet_type: "Neptune-like",
      discovery_method: "Transit",
      planet_mass: "8.17 Earths",
      discovery_date: 2009,
      orbital_radius: "0.01505 AU",
      orbital_period: "1.6 days",
      eccentricity: 0.01,
      keywords: ["Neptune-like", "GJ 1214 b", "M-type star", "orbital period", "exoplanet"]
  },
  {
      image: "https://science.nasa.gov/wp-content/uploads/2023/11/superearth-7.jpg?w=4096&format=jpeg",
      name: "Kepler-16 b",
      description: "Kepler-16b is a world where two suns set over the horizon instead of just one, the first Tatooine-like planet found in our galaxy.",
      planet_radius: "2.37 x Earth",
      planet_type: "Super Earth",
      discovery_method: "Transit",
      planet_mass: "0.333 Jupiters",
      discovery_date: 2011,
      orbital_radius: "0.704 AU",
      orbital_period: "227 days",
      eccentricity: 0.12,
      keywords: ["Tatooine-like", "Kepler-16 b", "binary stars", "orbital period", "exoplanet"]
  },
  {
      image: "https://science.nasa.gov/wp-content/uploads/2023/11/superearth-7.jpg?w=4096&format=jpeg",
      name: "Ross 128 b",
      description: "Ross 128 b is a super Earth exoplanet that orbits an M-type star. Its mass is 1.35 Earths, it takes 9.9 days to complete one orbit of its star, and is 0.0496 AU from its star. Its discovery was announced in 2017.",
      planet_radius: "1.1 x Earth",
      planet_type: "Super Earth",
      discovery_method: "Radial Velocity",
      planet_mass: "1.35 Earths",
      discovery_date: 2017,
      orbital_radius: "0.0496 AU",
      orbital_period: "9.9 days",
      eccentricity: 0.0,
      keywords: ["super Earth", "Ross 128 b", "M-type star", "orbital period", "exoplanet"]
  }
]


export default function Page() {
  const [exoplanets, setExoplanets] = useState(exoplanetsData);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar exoplanetas por nombre y keywords según el término de búsqueda
  const filteredExoplanets = exoplanets.filter((planet) => 
    planet.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (Array.isArray(planet.keywords) && planet.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  return (
    <div className="flex flex-col gap-12">
      <h1 className="font-semibold text-[36px] text-center">Exoplanets</h1>

      <Input
        className="w-[30%] m-auto"
        type="text"
        label="Search for exoplanets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-row justify-between mx-32">
        <div className="flex flex-col gap-3 bg-white text-black h-full px-20 py-14 rounded-[40px]">
          <p className="font-semibold text-center text-lg">Filters</p>

          <ul className="flex flex-col">
            <li>
              <Checkbox color="default" radius="none">
                Habitable
              </Checkbox>
            </li>
            <li>
              <Checkbox color="default" radius="none">
                Tamaño grande
              </Checkbox>
            </li>
            <li>
              <Checkbox color="default" radius="none">
                Temperatura baja
              </Checkbox>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-x-8 gap-y-12">
          {filteredExoplanets.map((exoplanet) => (
            <ExoplanetCard data={exoplanet} key={exoplanet.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
