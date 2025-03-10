"use client";
import React, { useEffect, useState } from "react";
import Drawer from './DiagonalDrawer'
import '../Header/DiagonalDrawer.css'
import Image from "next/image";

export default function Header() {
  const [selectedIndex1, setSelectedIndex1] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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

  const openDrawer = () => {
    setIsOpen(true)
  }

  return (
    <React.Fragment>
      <div className={`diagonal-drawer ${isOpen ? "open" : ""}`}>
        <Drawer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedIndex1={selectedIndex1}
          setSelectedIndex1={setSelectedIndex1}
        />
      </div>
      <header
        className={`${isScrolled ? "headerShow" : ""
          } w-full fixed top-0 z-50`}

      >

        <div className="relative">
          <div
            onClick={openDrawer}
            className="z-30 absolute cursor-pointer w-14 h-14 lg:w-24 lg:h-24 bg-[#F59E0B] flex justify-center items-center rounded-br-[0.5rem]">
            <div className="relative flex items-center justify-center w-7 lg:w-10 h-7 lg:h-10">
              <Image
                src="/drawer.svg"
                height={100}
                width={100}
                alt="drawer item"
                className="w-[150px] h-10" />
            </div>
          </div>
        </div>

        <nav className="invisible mx-auto xl:visible xl:max-w-4xl 2xl:max-w-7xl ">
          <ul className="flex flex-row items-center h-24 font-recoletaBlack">
            <li className="relative mr-20 text-2xl font-bold group" >
              {selectedIndex1 === 0 ? (
                <span className="transform opacity-100 menu-effect -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="transform opacity-0 menu-effect rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <a className={`menu-item ${selectedIndex1 === 0 ? "text-black" : ""} text-[#666d47] group-hover:text-black`}
                href="/#home"
                onClick={() => setSelectedIndex1(0)}
              >
                Home
              </a>
            </li>
            <li className="relative mr-20 text-2xl font-bold group" >
              {selectedIndex1 === 1 ? (
                <span className="transform opacity-100 menu-effect -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="transform opacity-0 menu-effect rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <a className={`menu-item ${selectedIndex1 === 1 ? "text-black" : ""} text-[#666d47] group-hover:text-black`}
                href="/#portfolio"
                onClick={() => setSelectedIndex1(1)}
              >
                Portfolio
              </a>
            </li>
            <li className="relative mr-20 text-2xl font-bold group" >
              {selectedIndex1 === 2 ? (
                <span className="transform opacity-100 menu-effect -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="transform opacity-0 menu-effect rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <a className={`menu-item ${selectedIndex1 === 2 ? "text-black" : ""} text-[#666d47] group-hover:text-black`}
                href="/#about-me-component"
                onClick={() => setSelectedIndex1(2)}
              >
                AboutMe
              </a>
            </li>
            <li className="relative mr-20 text-2xl font-bold group" >
              {selectedIndex1 === 3 ? (
                <span className="transform opacity-100 menu-effect -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="transform opacity-0 menu-effect rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}
