"use client";
import React, { useState } from "react";
import useIdioma from "../../hook/useIdioma";


const Skills = () => {
  const [activeTab, setActiveTab] = useState("soft");
  const idioma = useIdioma()
  const data2 = idioma.idioma.skills
  console.log("data2", data2.title)


  const setBg = (active) => (activeTab === active ? "bg-yellow" : "bg-grey");
  const setTabsAlignment = (tab) =>
    tab === "soft" ? "text-left" : "text-right";

  const tabs = (
    <div className='flex'>
      {["soft", "hard"].map((el) => (
        <button
          key={el}
          type='button'
          className={`btn ${setBg(el)} ${setTabsAlignment(el)}`}
          onClick={() => setActiveTab(el)}
        >
          {el} Skills
        </button>
      ))}
    </div>
  );
  const content = (
    <ul
      className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${activeTab === "soft" ? "justify-start" : "justify-end"
        }`}
    >
      {data2[activeTab].map(({ icon, text }) => (
        <li key={text} className='skill'>
          <span> {icon}</span> {text}
        </li>
      ))}
    </ul>
  );
  return (
    <div className="p-6">
      <h2 className='mb-8 text-center font-bold  text-black underline decoration-4'> {data2.title}</h2>
      {tabs}
      {content}
    </div>
  );
};

export default Skills;
