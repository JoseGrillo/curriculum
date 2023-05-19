"use client"
import React, { useId } from "react";
import useIdioma from "../../hook/useIdioma";
import Image from 'next/image';


const SeoMe = () => {
  //const { title, body } = data;
  const id = useId();
  const idioma = useIdioma()
  const { title, body } = idioma.idioma.miSeo

  return (
    <section>
      <h2 className='mb-8 text-center font-bold  text-black underline decoration-4'> {title} </h2>
      <div className="h-2 bg-green" />
      <div className="bg-grey-light p-6 drop-shadow-md relative">

        <p className="text-gray-600 text-base mt-3 mb-5">{body}</p>
        <Image
          src='/images/SEO-JoseGrillo2.webp'
          alt="A beautiful image"
          width={1000}
          height={700}
        // fill
        // style={{ objectFit: "cover" }}

        // sizes="(max-w-full)"
        />
      </div>
      <div className="h-2 bg-green" />

    </section>
  );
};

export default SeoMe;


