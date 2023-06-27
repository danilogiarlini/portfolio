import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <CodeIcon className="mx-auto inline-block w-20 mb-4 text-green-400" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            This is a selection of the projects I have developed throughout my coding journey. Each work has provided me 
            with valuable opportunities to apply and explore various tools and technologies, both while collaborating 
            with teams and working independently. Let's check it out!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((p) => (
            <a
              href={p.link}
              target="_blank" 
              key={p.image}
              className="sm:w-1/2 w-100 p-4 ">
              <div className="flex relative">

                <div className="px-8 py-10 relative z-10 w-full border-2 rounded-2xl border-gray-800 bg-gray-900 opacity-100 transition hover:border-gray-200">
                  <div>
                    <img src={p.image} alt='coding_logo' className="w-10 h-10 mb-5 mx-auto"/>
                  </div>
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {p.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {p.title}
                  </h1>
                  <p className="leading-relaxed">{p.description}</p>
                </div>
              </div>
            </a>
          ))}
          
        </div>
      </div>
    </section>
  );
}
