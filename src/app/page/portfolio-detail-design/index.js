import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Hind } from "next/font/google";
import Image from "next/image";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Index({ id, data, DataArray }) {
  const router = useRouter();

  const [next, setNext] = useState();
  const [prev, setPrev] = useState();

  useEffect(() => {
    if (JSON.parse(id) === DataArray.length - 1) {
      setNext(0);
    } else {
      setNext(JSON.parse(id) + 1);
    }
    if (JSON.parse(id) === 0) {
      setPrev(DataArray.length - 1);
    } else {
      setPrev(JSON.parse(id) - 1);
    }
  }, [DataArray.length, id]);

  return (
    <React.Fragment>
      <div className="overlay h-[400px] lg:top-[96px] sm:top-0 z-20 border-t border-gray-300"></div>
      <div className="relative">
        <Image
          src={data?.images[0]}
          alt="bg photo"
          className="h-[400px]  lg:mt-24 sm:mt-0  object-fill"
          width={0}
          height={20}
          sizes="100vw"
          style={{ width: '100%', backgroundSize: "cover" }} // optional
        />
      </div>

      <div className="absolute z-30 top-[42px] sm:top-[200px] sm:left-[65px] justify-center  items-center w-full px-10 sm:w-3/4 xl:w-1/2 sm:px-0  sm:text-left">
        <div className="container m-auto">
          <div className="max-w-[650px] w-[100%] m-auto">
            <p className="opacity-3 sm:text-left text-center font-sans text-[#111827] mt-20 lg:mt-10 md:-mt-10">
              Project Sample
            </p>
            <h1 className="opacity-3 text-[#111827] sm:text-left text-center w-full sm:w-3/4 font-recoletaBold text-4xl md:text-4xl lg:text-4xl xl:text-4xl">
              {data?.title}
            </h1>
          </div>
        </div>
      </div>

      <div
        className="relative grid grid-cols-12 space-x-0 lg:space-x-8"
        style={{
          background:
            "linear-gradient(90deg, rgba(238, 247, 251, 1) 58%, rgba(255, 255, 255, 1) 52%",
        }}
      >
        <div className="col-span-12 mb-20 lg:col-span-8 scrol lg:px-0 sm:px-20">
          {data?.images.map((item) => (
            <div key={item} className="flex items-center justify-center lg:justify-end">
              <Image
                src={item}
                alt="portfolio photos"
                height={100}
                width={800}
                className="mt-20 rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="col-span-12 lg:col-span-4 lg:px-0 sm:px-20">
          <div className="mt-10 sm:mt-24 w-full lg:max-w-[300px] lg:px-1  px-3 sticky top-36 pb-14">
            <h1 className="text-3xl  mb-4 text-[#F59E0B]">{data?.name}</h1>
            <div className="flex flex-col mt-4 mb-4 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <a
                href={data?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#F59E0B] rounded-lg hover:bg-[#111827] transition-colors duration-300"
              >
                Visit Project Site
              </a>
              <a
                href={data?.giturl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#111827] rounded-lg hover:bg-[#F59E0B] transition-colors duration-300"
              >
                View Project Code
              </a>
            </div>


            <p className="text-[14px] font-sans mb-4 text-[#111827]">
              {data?.des}
            </p>
            <p id="highlight" className="my-2  text-dark text-[20px] font-sans">
              Project Descriptions
            </p>
            <p className="text-[14px] font-sans mb-4 text-[#111827]">
              {" "}
              {data?.des1}
            </p>

            <div className="flex flex-wrap">
              {data?.technologies?.map((tech, index) => (
                <h1
                  key={index}
                  className="mr-5 text-[14px] bg-[#63c5f1] lg:bg-[#EEF7FB] px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-[#6A787D]"
                >
                  {tech}
                </h1>
              ))}
            </div>


          </div>
        </div>
      </div>

      <div className="relative flex h-48 text-white bg-accent-color">
        <div
          className={`group w-1/2 flex items-center justify-center bg-cover  ${hind.className}`}
          style={{ backgroundImage: `url(${DataArray[prev]?.images[0]})` }}
        >
          <a
            className="flex justify-center group:hover:bg-[#111827] cursor-pointer transition-colors duration-300 bg-[#405B66]  bg-opacity-90 items-center w-full h-full"
            onClick={() => router.push(`/portfoliodetail/${prev}`)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              class="transform transition-transform group-hover:-translate-x-3 duration-300 w-5 h-5 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              ></path>
            </svg>
            Previous Project
          </a>
        </div>

        <div
          className={`group w-1/2 flex items-center justify-center bg-cover  ${hind.className}`}
          style={{ backgroundImage: `url(${DataArray[next]?.images[0]})` }}
        >
          <a
            className="flex justify-center group:hover:bg-[#111827] cursor-pointer transition-colors duration-300 bg-[#405B66]  bg-opacity-90 items-center w-full h-full"
            onClick={() => router.push(`/portfoliodetail/${next}`)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              class="transform transition-transform group-hover:translate-x-3 duration-300 w-5 h-5 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
            Next Project
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
