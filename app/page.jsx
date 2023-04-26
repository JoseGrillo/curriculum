import React from "react";
import AboutMe from "./component/about-me";
import ProfessionalExperience from "./component/professional-experience";
import Proyectos from "./component/proyectos";


const page = () => {
  return (
    <>
      <AboutMe />
      <Proyectos />
      <ProfessionalExperience />
    </>
  );
};

export default page;
