import Image from "next/image";

function ProyectCard({ imag }) {
  return (
      <section className="grid grid-cols-1 md:grid-cols-3 p-5 gap-5">
        {imag.map((img) => (
          <div key={img.name} className="">
            <Image
            loading="lazy"
              src={img.src}
              width={300}
              height={300}
              alt={img.name}
              className="w-full h-full object-cover rounded-xl border-2 border-Cuarto"
            />
          </div>
        ))}
      </section>
  );
}

export default ProyectCard