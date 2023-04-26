"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";


import { Envelope, Twitter, Linkedin, Medium, Discord, Whatsapp, España } from "./icons/";
import useIdioma from "../../hook/useIdioma";


const Sidebar = () => {
  //const { name, role, education, contactLinks } = data;

  const idioma = useIdioma()
  const { id, name, role, education, contactLinks } = idioma.idioma.personalData
  console.log("id ", id, name)

  return (
    <div className='bg-black flex flex-col  w-full h-auto sm:h-screen sm:justify-stretch sm:w-1/3   overflow-auto items-stretch sm:fixed '>
      {/* sm:fixed */}

      <div className='text-white flex flex-col p-10 items-center '>
        <div className=" flex gap-1 mb-6 text-sm items-baseline">
          <p>Idioma:</p>
          {/* <div className="flex-col gap-2"> */}
          <button className="box-border h-9 w-16 border-2 text-center rounded-lg bg-yellow hover:bg-black hover:text-white "
            onClick={() => { idioma.ingles() }}>Ingles</button>

          <button className="box-border h-9 w-16 border-2 text-center rounded-lg bg-yellow hover:bg-black hover:text-white" onClick={() => { idioma.español() }}> Español </button>
          {/* </div> */}

        </div>

        <div>
          <Image
            priority
            width={300}
            height={300}
            className='rounded-full h-full mb-6'
            src='/images/JoseGrillo.png'
            alt='jose Gregorio Grillo Hernandez'

          />
        </div>
        <div className="flex flex-col self-center text-center ">
          <h1 className='mb-2  font-bold'>{name}</h1>
          <h2 className='mb-8'>{role}</h2>
          <p className='mb-2'>{education[0]}</p>
          <p className='mb-2'>{education[1]}</p>
        </div>
        <div className='text-white text-center  mt-4 sm:mt-8'>
          <h3 className='mb-2'> CONTACT ME</h3>
          <div className='flex flex-row justify-center gap-2 mb-8'>
            {/* <a
              className='icons-contactme'
              href={contactLinks?.[0]}
              aria-label={"email link"}
            >
              <Envelope />
            </a> */}
            <Link href={contactLinks?.[0]} target="_blank" className='icons-contactme'><Envelope /></Link>
            {/* <a
              className='icons-contactme'
              href={contactLinks?.[1]}
              aria-label={"twitter link"}
            >
              <Twitter />
            </a> */}
            <Link href={contactLinks?.[1]} target="_blank" className='icons-contactme'><Twitter /></Link>
            {/* <a
              className='icons-contactme'
              href={contactLinks?.[2]}
              aria-label={"whatsapp link"}
            >
              <Whatsapp />
            </a> */}
            <Link href={contactLinks?.[2]} target="_blank" className='icons-contactme'><Whatsapp /></Link>
            {/* <a
              className='icons-contactme'
              href={contactLinks?.[3]}
              aria-label={"medium link"}
            >
              <Discord />
            </a> */}
            <Link href={contactLinks?.[3]} target="_blank" className='icons-contactme'> <Discord /></Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Sidebar;



// personalData: {
//   name: "Jose Grillo",
//     role: "Desarrollador Full-Stack",
//       education: [
//         "Tecnico en Informatica, Univ. Tecnologica del Centro (1988-1990)",
//         "Abogado, Univ.. Bolivariana de Venezuela (2005-2010)",
//       ],
//         contactLinks: [
//           "mailto:grillo.jg@gmail.com",
//           "https://twitter.com/grillojg",
//           "https://wa.me/584121091522",
//           "https://discord.gg/CkbQ5XUM5w"
//         ],
//   },