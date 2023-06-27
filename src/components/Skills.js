import React from "react";
import { ChipIcon } from "@heroicons/react/solid";
import { skillz } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <ChipIcon className="text-green-400 w-20 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            This is the toolbox for my everyday work. When working on projects, I strive to 
            incorporate a diverse range of technologies to create comprehensive and fully functional 
            applications. So much to learn, so little time!
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skillz.map((skill) => (
            <div key={skill.name} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center ">
                <img src={skill.icon} alt="logo" className="text-green-400 w-8 h-8 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
