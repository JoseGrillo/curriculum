"use client"
import React from "react";
import useIdioma from "../../hook/useIdioma";



const ProfessionalExperience = () => {
  //const { title, experiences } = data;
  const idioma = useIdioma()
  const { title, experiences } = idioma.idioma.professionalData

  return (
    <section>
      <h2 className='mb-8 text-center font-bold  text-yellow underline decoration-4'> {title}</h2>
      <div className='flex flex-col gap-6'>
        {experiences.map(({ role, description, current }) => (
          <div key={role} className='flex flex-col rounded-lg'>
            <span className={`h-2 ${current ? "bg-green" : "bg-grey"}`} />
            <div className='bg-grey-light p-6 drop-shadow-md'>
              <h3 className="text-yellow font-bold">{role}</h3>
              <p className='mt-2'>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalExperience;
