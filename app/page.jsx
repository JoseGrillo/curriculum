import React from "react";
import AboutMe from "./component/about-me";
import ProfessionalExperience from "./component/professional-experience";
import Proyectos from "./component/proyectos";
import SeoMe from "./component/seo";


const page = () => {
  return (
    <>
      <AboutMe />
      <Proyectos />
      <ProfessionalExperience />
      <SeoMe />
    </>
  );
};

export default page;
