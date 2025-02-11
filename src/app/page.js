"use client";
import React, { useEffect, useState } from "react";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import { Hind } from "next/font/google";
import MySlider from "./components/SliderCard/MySlider";
import AboutMe from "./components/AboutMe/AboutMe";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="relative min-h-screen">
      <HomeComponent />
      <div
        className={`${hind.className} mt-0 pt-5 -mb-40`}
        id="portfolio"
        style={{
          backgroundImage:
            "linear-gradient(-62deg, rgb(229 229 229) 0 50%,  white 0% 100%)",
          width: "100%",
        }}
      >
        <div className="container m-auto">
          <p
            className="text-[300px]  text-[#F7FBFD] md:pl-[50px] px-5 max-w-[750px] w-[100%] overflow-hidden"
            style={{ transform: "translate(0px,-20px)" }}
          >
            gPortfolio
          </p>
          <div className="" style={{ transform: "translate(0px, -290px)" }}>
            <p className="text-[#F59E0B]  md:pl-[80px] px-5 font-extrabold text-5xl">
              Recent Works
            </p>
            <p
              className={`max-w-2xl md:pl-[80px] px-5 font-[300] text-[16px] text-[#2c3d63] leading-8 mt-5 ${hind.className}`}
            >
              Welcome to my portfolio! <br />
              I’m a Frontend Web Developer with a passion for building scalable, user-friendly, and visually engaging web applications. My work focuses on modern UI/UX design, performance optimization, and seamless user experiences that align with client needs. Each project is an opportunity to refine my skills, solve complex challenges, and bring innovative ideas to life. Below, you’ll find some of my work demonstrating my expertise in frontend development, responsive design, and interactive web solutions.
            </p>
          </div>
        </div>
        <div
          style={{ transform: "translate(0px,-230px)" }}
        >
          <MySlider />
        </div>
      </div>
      <AboutMe />

      {
        isScrolled ? (
          <div
            onClick={() => window.scrollTo(0, 0)}
            className="bg-[#F59E0B] p-4 w-fit rounded-xl fixed bottom-8 right-8 cursor-pointer z-50 animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
        ) : (
          ""
        )
      }
    </main >
  );
}
