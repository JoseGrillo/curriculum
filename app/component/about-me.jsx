"use client"
import React, { useId } from "react";
import Skills from "./skills";
import useIdioma from "../../hook/useIdioma";


const AboutMe = () => {
  //const { title, body } = data;
  const id = useId();
  const idioma = useIdioma()
  const { title, body } = idioma.idioma.aboutMe

  return (
    <section>
      <h2 className='mb-8 text-center font-bold  text-black underline decoration-4'> {title} </h2>
      <div className="h-2 bg-green" />
      <div className="bg-grey-light p-6 drop-shadow-md">

        {body?.map((el, i) => (
          <p key={`${id}_${i}`} className='mb-6 text-xl'>
            {el}
          </p>
        ))}
      </div>
      <div className="h-2 bg-green" />
      <Skills />
    </section>
  );
};

export default AboutMe;


