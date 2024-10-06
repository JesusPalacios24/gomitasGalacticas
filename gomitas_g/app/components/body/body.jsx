import React from "react";
import ButtonStarted from "../ui/ButtonStarted";

const problemas = [{ img: '/image1.jpg', name: "asd", des: "wqeeqw" },
{ img: '/image1.jpg', name: "456", des: "wqeeqw" },
{ img: '/image1.jpg', name: "asd", des: "wqeeqw" }];

const inicio = [{ img: '/image1.jpg' },
{ img: '/image1.jpg' },
{
    img: '/image1.jpg'
}];

const exoplanetas = [{
    subTit: "Go search any Exo-Planet your curious about!",
    text: "Start searching in our Content page so you can get the information about the Exo-Planets you’re more interested.",
    butoon: <ButtonStarted />
}];

export default function Body() {
    return (
        <div className="p-8 text-white" >
            {/* Primera división: Mensaje */}
            < div className="text-center mb-8">
                <h2 className="text-h3">Bienvenido a Gomitas G</h2>
                <p className="m-4">Descubre el dulce mundo de nuestras gomitas artesanales</p>
            </div >


            {/* Segunda división: 3 bloques con imagen e info */}
            <div className="text-center mb-8">
                <h1>asdkjal</h1>
            </div>
            <div className="flex justify-between mb-8">
                {problemas.map(problem => (
                    <div className="w-1/3 text-center flex flex-col items-center m-4">
                        <img src={problem.img} alt="Caracteristica" />
                        <h3>{problem.name}</h3>
                        <p>{problem.des}</p>
                    </div>))}
            </div>


            {/* Tercera división: Begin your journey outside our Solar System! */}
            <div className="text-center m-5">
                <h1>wedqdas</h1>
                <p className="m-3">asda</p>
                <div className="flex justify-center m-4">
                    <ButtonStarted />
                </div>
            </div>
            <div className="flex justify-between mb-8">
                {inicio.map(inicio => (
                    <div className="w-1/3 flex flex-col items-center m-4">
                        <img src={inicio.img} alt="ESO" />
                    </div>
                ))}
            </div>


            {/*Cuarta división: Go search any Exo-Planet your curious about!*/}
            <div className="flex">
                {exoplanetas.map(exoplanetas => (
                    <div className="w-[50%] justify-center m-4 ">
                        <h3 className="m-4">{exoplanetas.subTit}</h3>
                        <p className="m-4">{exoplanetas.text}</p>
                        <div className="m-8">
                            <ButtonStarted />
                        </div>
                    </div>
                ))}
                <img src="/image1.jpg" alt="EESO" className="w-[50%] flex justify-center m-4" />
            </div>

        </div >
    );
}
