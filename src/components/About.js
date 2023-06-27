import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm <em className=" text-green-400">Danilo</em>,
            <br className="hidden lg:inline-block mt-4" />I love to build
            beautiful apps.
          </h1>
          <p className="mt-6 mb-8 leading-relaxed">
            {/* Welcome! I'm a Software Developer and Data Analyst. 
            I really love to code my way through the building of beautiful apps. On this space, 
            you can find some of the projects I made. If you are interested, feel free to send me a message! */}
            Welcome to my portfolio! I'm a passionate Software Developer, deeply enthralled by the art of coding and crafting
            beautiful applications. This space showcases a collection of my
            projects, which reflect my dedication and creativity.
            <br />
            <br /> If any of my projects catch your interest or if you have
            any inquiries, please don't hesitate to reach out!
          </p>
          <div className="flex justify-start mt-6">
            {/* <a
              href="#contact"
              className="inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-md"
            >
              Work with me
            </a> */}
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none transition hover:bg-gray-700 hover:text-white rounded text-md"
            >
              See my projects
            </a>
            <a
              href="./DaniloGiarlini_CV_dev.pdf"
              download
              className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none transition hover:bg-green-700 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Here's my CV
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            src="./coding.svg"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
}
