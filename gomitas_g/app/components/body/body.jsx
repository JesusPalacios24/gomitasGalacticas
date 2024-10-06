import React from "react";
import ButtonStarted from "../ui/ButtonStarted";

const problemas = [{ img: '/image1.jpg', name: "Limitless accurate official information"},
{ img: '/image1.jpg', name: "Expand Collage Education"},
{ img: '/image1.jpg', name: "Get the knowledge from top researchers of Exo-planets"}];

const inicio = [{ img: '/image1.jpg' },
{ img: '/image1.jpg' },
{
    img: '/image1.jpg'
}];

const exoplanetas = [{
    titEx: "Go search any Exo-Planet your curious about!",
    textEx: "Start searching in our Content page so you can get the information about the Exo-Planets you’re more interested.",
    butoon: <ButtonStarted />
}];

const researchers = [{
    titRe: "Start sharing your knowledge with other people!",
    textRe: "The people with more knowledge in the topic can share their knowledge with others. So don’t stop learning, you can teach too!",
    butoon: <ButtonStarted />
}];

export default function Body() {
    return (
        <div className="p-8 text-white" >
            {/* Primera división: Mensaje */}
            < div className="text-center mb-8">
                <h2 className="text-h2">Explore the space beyond our world with <br /> Official NASA data</h2>
                <p className="m-4 text-h6">Official NASA Data on Exo-Planets</p>
            </div >


            {/* Segunda división: 3 bloques con imagen e info */}
            <div className="text-center mb-8">
                <h1 className="text-h3">Fast... Accurate... Accesible...</h1>
            </div>
            <div className="flex justify-between mb-8">
                {problemas.map((problem, index) => (  // Agregado 'index' como segundo argumento
                    <div key={index} className="w-1/3 text-center flex flex-col items-center m-4">
                        <img src={problem.img} alt="Caracteristica" />
                        <h3 className="text-h5 m-4">{problem.name}</h3>
                    </div>
                ))}
            </div>


            {/* Tercera división: Begin your journey outside our Solar System! */}
            <div className="text-center m-5">
                <h1 className="text-h3">Begin your journey outside our Solar System!</h1>
                <p className="m-3">Get started with your knowledge about Exo-Planets now with our 
                Collection about <br /> Exo-Planets serched from confident sources.</p>
                <div className="flex justify-center m-4">
                    <ButtonStarted />
                </div>
            </div>
            <div className="flex justify-between mb-8">
                {inicio.map((inicio, index) => (  // Agregado 'index' como segundo argumento
                    <div key={index} className="w-1/3 flex flex-col items-center m-4">
                        <img src={inicio.img} alt="ESO" />
                    </div>
                ))}
            </div>


            {/*Cuarta división: Go search any Exo-Planet your curious about!*/}
            <div className="flex">
                {exoplanetas.map((exop, index) => (  // Agregado 'index' como segundo argumento
                    <div key={index} className="w-[50%] justify-center m-4 ">
                        <h3 className="flex justify-center m-4 text-h3">{exop.titEx}</h3>
                        <p className="flex justify-center m-4">{exop.textEx}</p>
                        <div className="m-8 flex justify-center">
                            <ButtonStarted />
                        </div>
                    </div>
                ))}
                <img src="/image1.jpg" alt="EESO" className="w-[50%] flex justify-center m-4" />
            </div>


            {/*Quinta división: Start sharing your knowledge with other people!*/}
            <div className="flex">
                <img src="/image1.jpg" alt="EESO" className="w-[50%] flex justify-center m-4" />
                {researchers.map((rese, index) => (  // Agregado 'index' como segundo argumento
                    <div key={index} className="w-[50%] justify-center m-4 ">
                        <h1 className="m-4 text-h3">{rese.titRe}</h1>
                        <p className="m-4">{rese.textRe}</p>
                        <div className="m-5 flex justify-center">
                            <ButtonStarted />
                        </div>
                    </div>
                ))}
            </div>

        </div >
    );
}
