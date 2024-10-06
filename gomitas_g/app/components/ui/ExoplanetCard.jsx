"use client";
// import Image from "next/image";

import { useState } from "react";

import { Card, CardFooter, Image, Button } from "@nextui-org/react";

import { FaArrowRightLong } from "react-icons/fa6";

export default function ExoplanetCard({ data }) { 
  const [animation, setAnimation] = useState("");
  return (
    <div
      className="relative flex flex-col gap-0 w-[270px]  "
      onMouseEnter={() =>
        setAnimation("transition-all duration-500 ease-in-out h-44")
      }
      onMouseLeave={() =>
        setAnimation("transition-all duration-500 ease-in-out h-10")
      }
    >
      <a href={`/exoplanets/${data.id}`} className="">
        <Card isFooterBlurred radius="lg" className="border-none ">
          <Image
            alt="Woman listing to music"
            className="object-cover w-full"
            // isZoomed
            height={270}
            src={data.image}
            width={270}
          />
          <CardFooter
            className={`before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 h-10  ${animation} flex-col`}
          >
            <div className="flex flex-row justify-between w-full">
              <p className="mt-1 text-sm text-white/80">{data.name}</p>
              <Button
                className="text-tiny text-white bg-black/20 "
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                <FaArrowRightLong className="inline text-[15px]" />
              </Button>
            </div>
            <p className=" text-tiny text-white/80 w-[80%] break-words line-clamp-6">{data.description}</p>
          </CardFooter>
        </Card>
      </a>
    </div>
  );
}
