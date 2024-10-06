import React from "react";
import ExoplanetCard from "../components/ui/ExoplanetCard";

import { Checkbox, Input } from "@nextui-org/react";

import { Button } from "@nextui-org/button";

let exoplanets = [
  {
    id: 1,
    image:
      "https://th.bing.com/th/id/OIP.hCfHyL8u8XAbreXuaiTMQgHaHZ?rs=1&pid=ImgDetMain",
    // clasification: "clasificacion",
    name: "Ramon",
    age: 20,
    description: "tfghjkl[;]gfds",
  },
  {
    id: 2,
    image: "https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1576497771/content-items/003/518/364/FernandoKrapp-85-2-original.jpg?1576497771",
    name: "Pedro",
    age: 32,
    description: "tfghjkl[;]gfds",
  },
  {
    id: 3,
    image:
      "https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?rs=1&pid=ImgDetMain",
    name: "Juan",
    age: 43,
    description: "tfghjkl[;]gfds",
  },
];

export default function page() {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="font-semibold text-[36px] text-center mr-10">Research</h1>

      <Input
        className="w-[30%] m-auto "
        type="text"
        // placeholder="Search for exoplanets..."

        label="Search for investigators"
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
            <ExoplanetCard data={exoplanet} investigator={true} key={index}></ExoplanetCard>
          ))}
        </div>
      </div>

      {/* <p className="text-rose-500">aaa</p>
      <Button>Click me</Button> */}
    </div>
  );
}
