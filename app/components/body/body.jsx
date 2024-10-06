import React from "react";
import ButtonStarted from "../ui/ButtonStarted";
import { Image } from "@nextui-org/react";

import { FaArrowRightLong } from "react-icons/fa6";

import { Button } from "@nextui-org/react";

import { TfiWrite } from "react-icons/tfi";
import { MdOutlineSchool } from "react-icons/md";
import { BiFileFind } from "react-icons/bi";

const problemas = [
  {
    icon: <TfiWrite></TfiWrite>,
    name: "Limitless accurate official information",
  },
  {
    icon: <MdOutlineSchool></MdOutlineSchool>,
    name: "Expand Collage Education",
  },
  {
    icon: <BiFileFind></BiFileFind>,
    name: "Get the knowledge from top researchers of Exo-planets",
  },
];

const inicio = [
  { img: "/image1.jpg" },
  { img: "/image1.jpg" },
  {
    img: "/image1.jpg",
  },
];

const startedLanding = [
  { img: "/Started-BG.jpg" },
  { img: "/Started-BG2.jpg" },
  { img: "/image1.jpg" },
];

const exoplanetas = [
  {
    titEx: "Go search any Exo-Planet your curious about!",
    textEx:
      "Start searching in our Content page so you can get the information about the Exo-Planets you’re more interested.",
    butoon: <ButtonGetStarted />,
  },
];

const researchers = [
  {
    titRe: "Start sharing your knowledge with other people!",
    textRe:
      "The people with more knowledge in the topic can share their knowledge with others. So don’t stop learning, you can teach too!",
    butoon: <ButtonGetStarted />,
  },
];

export default function Body() {
  return (
    <div className=" text-white w-full relative mt-[-88px]  ">
      {/* Primera división: Mensaje */}

      <div
        className="relative h-screen w-full bg-cover bg-center pt-[88px] z-10 "
        style={{
          backgroundImage:
            "url('https://cdn.suwalls.com/wallpapers/space/light-shining-upon-the-planets-45753-2560x1440.jpg')", // Cambia esta ruta a la de tu imagen
        }}
      >
        <div className="mb-8 mt-[120px] relative">
          <div className="text-center relative w-[50%] left-[120px]">
            <h2 className="text-h2 text-left">
              Explore the space beyond our world with <br /> Official NASA data
            </h2>
            <p className="m-4 text-h6 text-left text-zinc-300 font-thin">
              Official NASA Data on Exo-Planets
            </p>
          </div>
        </div>
      </div>

      <div className="h-screen w-full  mt-[120px] ">
        {" "}
        {/* Segunda división: 3 bloques con imagen e info */}
        <div className="text-center mb-[70px]">
          <h1 className="text-h3 font-thin">
            Fast... Accurate... Accesible...
          </h1>
        </div>
        <div className="flex justify-between w-[70%] mx-auto ">
          {problemas.map(
            (
              problem,
              index // Agregado 'index' como segundo argumento
            ) => (
              <div
                key={index}
                className="w-1/3 text-center flex flex-col items-center justify-center gap-2 items-center m-4 w-[300px] bg-white bg-opacity-10 px-[10px] py-[20px] rounded-3xl"
              >
                {/* <img src={problem.img} alt="Caracteristica" /> */}

                <div className="text-[80px]">{problem.icon}</div>
                <h3 className="text-[22px] m-4 font-thin">{problem.name}</h3>
              </div>
            )
          )}
        </div>
      </div>

      {/* Tercera división: Begin your journey outside our Solar System! */}
      <div className="h-screen ">
        <div className="text-center pt-14  w-[60%] mx-auto">
          <h1 className="text-h2">
            Begin your journey outside our Solar System!
          </h1>
          <p className="mt-12 text-[18px] font-thin ">
            Get started with your knowledge about Exo-Planets now with our
            Collection about <br /> Exo-Planets serched from confident sources.
          </p>
          <div className="flex justify-center m-4 p-5">
            {/* <ButtonStarted /> */}
            <ButtonGetStarted />
          </div>
        </div>

        <div className="flex flex-row w-[55%] mx-auto mt-12 mb-8 justify-between ">
          {startedLanding.map(
            (
              inicio,
              index // Agregado 'index' como segundo argumento
            ) => (
              <div key={index} className="">
                <Image
                  isZoomed
                  width={240}
                  height={240}
                  alt="NextUI Fruit Image with Zoom"
                  src={inicio.img}
                />
              </div>
            )
          )}
        </div>
      </div>

      <div className=" flex flex-row justify-center h-screen pt-[100px]">
        {/*Cuarta división: Go search any Exo-Planet your curious about!*/}
        <div className="w-[45%] ">
          {exoplanetas.map(
            (
              exop,
              index // Agregado 'index' como segundo argumento
            ) => (
              <div key={index} className=" justify-center m-4 ">
                <h3 className="flex justify-center m-4 text-h3">
                  {exop.titEx}
                </h3>
                <p className="flex justify-center m-4">{exop.textEx}</p>
                <div className="m-8 flex justify-center">
                  <ButtonGetStarted />
                </div>
              </div>
            )
          )}
        </div>
        <Image
          isZoomed
          width={400}
          height={400}
          className="object-cover"
          alt="NextUI Fruit Image with Zoom"
          src="https://wallpapercave.com/wp/wp4448015.jpg"
        />
      </div>

      {/*Quinta división: Start sharing your knowledge with other people!*/}
      <div className="flex flex-row justify-center h-screen pt-[60px]">
        <Image
        //   isZoomed
          width={600}
          height={600}
          className="object-cover ml-24"
          alt="NextUI Fruit Image with Zoom"
          src="https://wallpapercave.com/wp/wp5971175.jpg"
        />
        <div className="w-[70%] ml-24">
          {researchers.map(
            (
              rese,
              index // Agregado 'index' como segundo argumento
            ) => (
              <div key={index} className="w-[50%] justify-center m-4 ">
                <h1 className="m-4 text-h3">{rese.titRe}</h1>
                <p className="m-4 font-thin">{rese.textRe}</p>
                <div className="m-5 flex justify-center">
                  <ButtonGetStarted />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function ButtonGetStarted() {
  return (
    <>
      <Button
        className="text-[16px] py-[22px]  rounded-full px-24"
        variant="faded"
      >
        Get Started <FaArrowRightLong className="inline mt-[3px] ml-1" />
      </Button>
    </>
  );
}
