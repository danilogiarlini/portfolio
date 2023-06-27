import React from "react";
// import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/outline";
import { contacts } from "../data";

export default function Skills() {
  return (
    <section id="contact">
      <div className="container px-5 py-10 mx-auto ">
        <div className="text-center mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className=" text-green-400 w-20 h-20 inline-block mb-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>

          {/* <ChatBubbleBottomCenterTextIcon className="text-green-400 w-20 inline-block mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Contact
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Do you have an exciting development project in mind and wish to discuss it further? Or perhaps you're simply interested in grabbing a cup of coffee and have a chat? 
          Feel free to reach out by sending me a message!
          </p>
        </div>
        <div className="flex lg:w-2/3 sm:mx-auto mb-8 -mx-2">
          {contacts.map((contact) => (
            <div key={contact.name} className="p-2 sm:w-1/2 w-full">
              <a href={contact.link} target="_blank" className="bg-gray-800 border-b-2 border-gray-800 transition hover:border-white rounded flex p-4 h-full items-center">
                <img
                  src={contact.icon}
                  alt="logo"
                  className="text-green-400 w-8 h-8 flex-shrink-0 mr-4"
                />
                <span className="title-font font-medium text-white">
                  {contact.name}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
