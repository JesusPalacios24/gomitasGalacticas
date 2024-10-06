import React from "react";
import ExoplanetCard from "../components/ui/ExoplanetCard";



import { Checkbox, Input } from "@nextui-org/react";

import { Button } from "@nextui-org/button";

let exoplanets = [
  {
    id: 1,
    image:
      "https://th.bing.com/th/id/R.0a375cff18d2bee68f113e933257f693?rik=OYtoBYWSdIbnoA&pid=ImgRaw&r=0",
    clasification: "clasificacion",
    name: "Exoplaneta ur mom",
    description:
      "exoplan etavy fghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipkl",
    data: {
      // size: number,
      // temperatura: number,
      // distance: number,
      // habitable: boolean,
    },
  },
  {
    id: 2,
    image:
      "/51Pegasib.png",
    clasification: "clasificacion",
    name: "Exoplaneta ur mom",
    description:
      "texto de exoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipkl",
    data: {
      // size: number,
      // temperatura: number,
      // distance: number,
      // habitable: boolean,
    },
  },
  {
    id: 3,
    image:
      "https://th.bing.com/th/id/R.0a375cff18d2bee68f113e933257f693?rik=OYtoBYWSdIbnoA&pid=ImgRaw&r=0",
    clasification: "clasificacion",
    name: "Exoplaneta ur mom",
    description:
      "texto de exoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipkl",
    data: {
      // size: number,
      // temperatura: number,
      // distance: number,
      // habitable: boolean,
    },
  },
  {
    id: 4,
    image:
      "https://th.bing.com/th/id/R.0a375cff18d2bee68f113e933257f693?rik=OYtoBYWSdIbnoA&pid=ImgRaw&r=0",
    clasification: "clasificacion",
    name: "Exoplaneta ur mom",
    description:
      "texto de exoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipkl",
    data: {
      // size: number,
      // temperatura: number,
      // distance: number,
      // habitable: boolean,
    },
  },
  {
    id: 5,
    image:
      "https://th.bing.com/th/id/R.0a375cff18d2bee68f113e933257f693?rik=OYtoBYWSdIbnoA&pid=ImgRaw&r=0",
    clasification: "clasificacion",
    name: "Exoplaneta ur mom",
    description:
      "texto de exoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipklexoplanetavyfghyujikopijnhbgvfhtuygijokpojmnbvcgtyuoipkl",
    data: {
      // size: number,
      // temperatura: number,
      // distance: number,
      // habitable: boolean,
    },
  },
];

export default function page() {
  return (
    <div className="flex flex-col gap-12">
      
      <h1 className="font-semibold text-[36px] text-center mr-10">Exoplanets</h1>

      <Input
        className="w-[30%] m-auto "
        type="text"
        // placeholder="Search for exoplanets..."

        label="Search for exoplanets..."
        // labelPlacement="outside-left"
        // description="outside-left"
      />

      <div className="flex flex-row justify-between mx-32">
        <div className="flex flex-col gap-3 bg-white text-black h-full px-20 py-14 rounded-[40px]">
          <p className="font-semibold text-center text-lg">Filters</p>

          {/* aqui los filtros hagan su desmadre */}
          <ul className="flex flex-col">
            <li>
              {" "}
              <Checkbox color="default" radius="none">
                Default
              </Checkbox>{" "}
              Fent
            </li>
            <li>
              {" "}
              <Checkbox color="default" radius="none">
                Default
              </Checkbox>
              Size
            </li>
            <li>
              {" "}
              <Checkbox color="default" radius="none">
                Default
              </Checkbox>{" "}
              Asa
            </li>
            <li>
              {" "}
              <Checkbox color="default" radius="none">
                Default
              </Checkbox>{" "}
              Asa
            </li>
            <li>
              {" "}
              <Checkbox color="default" radius="none">
                Default
              </Checkbox>{" "}
              Asa
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-12">
          {exoplanets.map((exoplanet, index) => (
            <ExoplanetCard data={exoplanet} key={index}></ExoplanetCard>
          ))}
        </div>
      </div>

      {/* <p className="text-rose-500">aaa</p>
      <Button>Click me</Button> */}
    </div>
  );
}
