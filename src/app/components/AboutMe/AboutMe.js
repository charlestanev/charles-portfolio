"use client";
import React, { useState } from "react";
import { Hind } from "next/font/google";
import { AboutData } from "@/app/data";
import Image from "next/image";

import './aboutme.css'

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function AboutMe() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFaded, setIsFaded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mapData, setMapData] = useState(AboutData[0]);

  const myFunctions = (data) => {
    setIsFlipped(false);
    setIsFaded(false);
    setMapData(data);
  };

  const handleCardClick = (data, index) => {
    setIsFlipped(true);
    setIsFaded(true);
    setSelectedIndex(index);

    setTimeout(() => myFunctions(data), 600);
  };

  const HandleNext = () => {
    if (selectedIndex < 5) {
      handleCardClick(AboutData[selectedIndex + 1], selectedIndex + 1);
    } else {
      handleCardClick(AboutData[0], 0);
    }
  };
  const HandlePrev = () => {
    if (selectedIndex !== 0) {
      handleCardClick(AboutData[selectedIndex - 1], selectedIndex - 1);
    } else {
      handleCardClick(AboutData[5], 5);
    }
  };

  return (
    <React.Fragment>
      <div
        id="about-me-component"
        className="bg-[rgb(229,229,229)] pt-[250px] mt-4  pb-[100px] lg:pb-[600px] relative lg:h-[800px]"
      >
        <div className="container m-auto">
          <h1 className="text-[240px] w-[80%] overflow-hidden absolute lg:left-40 md:left-30 top-[-50px]  text-[#EAF7FC]">
            About Me
          </h1>
          <h1 className="relative font-recoletaBlack text-5xl  text-[#F59E0B] mb-5 -mt-40  md:px-24 px-5">
            About My Self
          </h1>
          <h4 className="relative w-full font-[300] md:w-3/4 lg:w-2/3 xl:w-1/2 font-recoleta text-[#111827] text-2xl mb-5 px-5 md:px-24">
            Crafting Seamless Frontend Experiences with Modern Technologies
          </h4>
          <section className="relative flex flex-col lg:flex-row px-5 md:px-24">
            <p
              className={`w-full lg:w-1/3 text-[#111827] mr-0 mb-5  lg:mr-4 font-[200] ${hind.className}`}
            >
              {" "}
              <strong className="font-recoletaBold text-[#2c3d63] text-2xl mb-1">Who I Am</strong><br />
              I’m Elmir (Charlie) Tanev, a dedicated Frontend Web Developer based in Plovdiv, Bulgaria, with nearly 5 years of experience in creating responsive, scalable, and user-friendly web applications. My expertise lies in HTML5, CSS3, JavaScript, React, Next.js, and TypeScript, complemented by UI/UX design skills. I am passionate about delivering visually captivating interfaces and ensuring seamless performance.
            </p>
            <p
              className={`w-full lg:w-1/3 text-[#111827] mr-0 mb-5  lg:mr-4 font-[200] ${hind.className}`}
            >
              {" "}
              <strong className="font-recoletaBold text-[#2c3d63] text-2xl mb-1">My Journey</strong><br />
              My career is driven by a passion for growth and innovation. I’ve built high-performance applications using frameworks like Tailwind CSS, PrimeReact, and Shadcn/UI, and mastered tools like Bootstrap 3, 4, and 5. I’ve also designed stunning prototypes and layouts with Figma and Adobe Illustrator. Continuous learning keeps me adaptable to modern technologies like Framer Motion for animations and Git/GitHub for version control.
            </p>
            <p
              className={`w-full lg:w-1/3 text-[#111827] mr-0 mb-5  lg:mr-4 font-[200] ${hind.className}`}
            >
              {" "}
              <strong className="font-recoletaBold text-[#2c3d63] text-2xl mb-1">Problem-Solving Approach</strong><br />
              My career is driven by a passion for growth and innovation. I’ve built high-performance applications using frameworks like Tailwind CSS, PrimeReact, and Shadcn/UI, and mastered tools like Bootstrap 3, 4, and 5. I’ve also designed stunning prototypes and layouts with Figma and Adobe Illustrator. Continuous learning keeps me adaptable to modern technologies like Framer Motion for animations and Git/GitHub for version control.

            </p>
          </section>
        </div>
      </div>

      <div
        style={{
          backgroundImage: "linear-gradient(45deg,  rgb(229 229 229) 70%,#F59E0B 30%)",
          width: "100%",
        }}
        className="lg:-mt-60"
      >
        <section className="container flex  flex-col m-auto sm:flex-row px-5 md:px-24 mt-[50px sm:mt-0] transform translate-y-[-100px]">
          <div className=" hidden sm:flex w-full sm:w-1/2 lg:w-7/12">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mr-0 lg:mr-10">
              {AboutData.map((item, index) => (
                <a key={index}
                  onClick={() => handleCardClick(item, index)}
                  style={{ boxShadow: "#F59E0B -5px  10px 20px 0px" }}
                  className={`relative cursor-pointer transition-all transform duration-300 group rounded-xl center p-6 lg:p-10 flex flex-col justify-center  items-center ${selectedIndex == index
                    ? " -translate-y-2 bg-[#2c3d63]"
                    : "hover:bg-[#2c3d63] hover:shadow-xl hover:-translate-y-2 bg-white"
                    }`}
                >
                  <div className="w-16 h-16 sm:w-10 sm:h-10  lg:w-16 lg:h-16">
                    <Image
                      height={100}
                      width={100}
                      src={item.img} alt="internet issues" />
                  </div>
                  <h4
                    className={`text-center text-sm lg:text-xl  font-recoletaBold transition-colors duration-500 group-hover:text-white  mt-3 ${selectedIndex === index ? "text-white" : "text-[#2c3d63]"
                      }`}
                  >
                    {item.title}
                  </h4>

                  <div
                    className={`absolute -top-2 -right-2 transform transition-all duration-500 opacity-0 group-hover:opacity-100 shadow-xl w-12 h-12 rounded-lg bg-[#2c3d63] flex justify-center items-center font-bold text-white font-recoletaBold text-xl  ${selectedIndex === index
                      ? "opacity-100 rotate-12"
                      : "group-hover:rotate-12"
                      }`}
                  >
                    {item.count}
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-5/12 overflow-visible px-0 sm:pl-6 xl:px-10">
            <div className="bg-white  lg:mt-0 mt-10 rounded-xl p-10 xl:p-12 shadow-accent-color relative">
              <section
                className={`fade-left overflow-hidden ${isFaded ? "fade-out" : ""
                  }`}
              >
                <p
                  class={`text-[#2c3d63] ${hind.className}  text-lg sm:text-base lg:text-xl transition duration-500 transform opacity-100 undefined undefined`}
                >
                  My skills as
                </p>
                <h2 class="font-recoletaBold text-[#2c3d63] text-3xl sm:text-2xl md:text-3xl mb-6 w-44 md:w-56 transition duration-500 transform opacity-100 undefined undefined">
                  {mapData?.title}
                </h2>

                <ul
                  class={`${hind.className} font-[300] list-disc text-[#2c3d63] ml-8 lg:ml-10 text-base lg:text-lg transition duration-500 transform  opacity-100 undefined undefined`}
                >
                  {mapData?.array?.map((obj) => (
                    <li key={obj} class="mb-2">{obj}</li>
                  ))}
                </ul>
              </section>
              <div
                className={`absolute perspective-500 -top-7 sm:top-30 right-0 sm:-right-20 card ${isFlipped ? "flipped" : ""
                  }`}
              >
                <div className="card-inner">
                  <div className="rounded-2xl cursor-pointer  text-7xl  xl:text-9xl font-recoletaBlack text-white bg-[#2c3d63]  p-5 xl:p-8 w-28 h-28 xl:w-48 xl:h-48  transform transition duration-500 transform-preserve -rotate-6 transform-preserve">
                    <span className="text-2xl xl:text-6xl mr-2 sm:mr-3">*</span>
                    {mapData.count}
                  </div>
                </div>
              </div>

              <div className="absolute right-10  -bottom-5 flex">
                <a
                  onClick={HandlePrev}
                  className="w-12 h-12 rounded-xl mr-1 transform transition duration-500  cursor-pointer  hover:-translate-y-1 hover:shadow-lg -rotate flex justify-center items-center bg-[#2c3d63]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                </a>
                <a
                  onClick={HandleNext}
                  className="w-12 h-12 rounded-xl mr-1 transform transition duration-500  cursor-pointer  hover:-translate-y-1 hover:shadow-lg -rotate flex justify-center items-center bg-[#2c3d63]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
