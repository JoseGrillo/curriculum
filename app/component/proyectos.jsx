"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useIdioma from "../../hook/useIdioma";


const Proyectos = ({ data }) => {
  //const { title, proyecto } = data;
  const idioma = useIdioma()
  const { title, proyecto } = idioma.idioma.proyectos

  return (
    <section >
      <h2 className='mb-8 text-center font-bold  text-yellow underline decoration-4'> {title}</h2>
      <div className="flex flex-wrap justify-between ">

        {/* <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3"> */}
        {/* //'flex flex-col gap-6'> */}
        {proyecto.map(({ id, imgUrl, title, descripcion, codigo, fuente, activo }) => (
          <div key={id} className="w-full  md:w-1/2  p-2  md:justify-stretch ">

            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden  ">
              <div className="px-4 py-2">
                <h1 className="text-gray-900 font-bold text-2xl ">{title}</h1>
              </div>

              <div className="h-64 w-96 relative px-2">
                <Image
                  src={imgUrl}
                  alt="A beautiful image"
                  fill
                  style={{ objectFit: "cover" }}

                  sizes="(max-w-full)"


                />
              </div>
              <div className="px-4 py-2">
                {/* <h1 className="text-gray-900 font-bold text-2xl ">{title}</h1> */}
                <p className="text-gray-600 text-base mt-3">{descripcion}</p>
                <div className="flex my-6 justify-center gap-2 ">
                  {activo &&
                    <Link href={codigo} target="_blank" className='box-border h-7 w-20  border-2 text-center rounded-lg bg-yellow hover:bg-black hover:text-white ' >
                      Codigo
                    </Link>
                  }

                  <Link href={fuente} target="_blank" className='box-border h-7 w-20  border-2 text-center rounded-lg  bg-yellow hover:bg-black hover:text-white'>
                    Fuente
                  </Link>
                </div>
              </div>
            </div >
          </div>


        ))}
      </div>
    </section>
  );
};

export default Proyectos;


// esto es lo que trae data
// title: "Proyectos",
//   proyecto: [
//     {
//       id: 'world-1',
//       imgUrl: '/images/imag_01.webp',
//       title: 'Consultoria Proteccion de Datos',
//       codigo: "",
//       fuente: "",
//     },
