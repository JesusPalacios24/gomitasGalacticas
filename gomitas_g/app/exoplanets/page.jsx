import React from "react";
import ExoplanetCard from "../components/ui/ExoplanetCard";

import {Button} from '@nextui-org/button';

let exoplanets = [
  {
    id: 1,
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
    id: 2,
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
    <div className="w-[70%] m-auto">
      <h1 className="font-semibold mb-20 text-[36px]">Exoplanets</h1>
      <div className="grid grid-cols-3 gap-y-12">
        {exoplanets.map((exoplanet, index) => (
          <ExoplanetCard data={exoplanet} key={index}></ExoplanetCard>
        ))}
      </div>


      {/* <p className="text-rose-500">aaa</p>
      <Button>Click me</Button> */}
      
    </div>
  );
}
