"use client";
import { useState } from "react";
import ExoplanetCard from "../components/ui/ExoplanetCard";
import { Checkbox, Input } from "@nextui-org/react";

import exoplanetsData from "../exoplanets";

export default function Page() {
  const [exoplanets, setExoplanets] = useState(exoplanetsData);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Estado para los filtros
  const [isSuperPlanet, setIsSuperPlanet] = useState(false);
  const [isBiggerThanEarth, setIsBiggerThanEarth] = useState(false);
  const [isRadialVelocity, setIsRadialVelocity] = useState(false);
  const [isPossibleLife, setIsPossibleLife] = useState(false);

  // Filtrar exoplanetas por nombre y keywords según el término de búsqueda
  const filteredExoplanets = exoplanets.filter((planet) => {
    const matchesSearchTerm =
      planet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (Array.isArray(planet.keywords) &&
        planet.keywords.some((keyword) =>
          keyword.toLowerCase().includes(searchTerm.toLowerCase())
        ));

    const matchesSuperPlanet = !isSuperPlanet || planet.planet_type === "Super Earth"; // Reemplaza con la lógica adecuada
    const matchesBiggerThanEarth = !isBiggerThanEarth || parseFloat(planet.planet_mass) > 1; // Ejemplo, filtra masas mayores a 1 Earth
    const matchesRadialVelocity = !isRadialVelocity || planet.discovery_method === "Radial Velocity";
    const matchesPossibleLife = !isPossibleLife || planet.keywords.includes("life");

    return (
      matchesSearchTerm &&
      matchesSuperPlanet &&
      matchesBiggerThanEarth &&
      matchesRadialVelocity &&
      matchesPossibleLife
    );
  });

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
              <Checkbox
                color="default"
                radius="none"
                isSelected={isSuperPlanet}
                onChange={(e) => setIsSuperPlanet(e.target.checked)}
              >
                Super Planet
              </Checkbox>
            </li>
            <li>
              <Checkbox
                color="default"
                radius="none"
                isSelected={isBiggerThanEarth}
                onChange={(e) => setIsBiggerThanEarth(e.target.checked)}
              >
                Bigger than the Earth
              </Checkbox>
            </li>
            <li>
              <Checkbox
                color="default"
                radius="none"
                isSelected={isRadialVelocity}
                onChange={(e) => setIsRadialVelocity(e.target.checked)}
              >
                Radial Velocity
              </Checkbox>
            </li>
            <li>
              <Checkbox
                color="danger"
                className="text-rose-600 font-medium"
                radius="none"
                isSelected={isPossibleLife}
                onChange={(e) => setIsPossibleLife(e.target.checked)}
              >
                Possible life
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
