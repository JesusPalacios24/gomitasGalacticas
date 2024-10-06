import Image from "next/image";

export default function ExoplanetCard({ data }) {
  return (
    <div
      
      className="flex flex-col gap-0 w-[270px]"
    >
      <a href={`/exoplanets/${data.id}`}>
        <Image
          src={data.image}
          alt="Descripción de la imagen"
          width={270}
          height={300}
        />

        <div className="flex flex-col">
          <span className="text-lg font-semibold">{data.nombre}</span>
          <span className="break-words line-clamp-3">{data.description}</span>
        </div>
      </a>
    </div>
  );
}
