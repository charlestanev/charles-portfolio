import React from "react";
import Accordian from '../Footer/Accordian'

export default function Footer() {
  const service = [
    " 1-on-1 Coaching",
    "Company Review",
    "Accounts Review",
    "HR Consulting",
    "SEO Optimisation",
  ];
  const company = ["About", "Meet the Team", "Accounts Review"];
  const helping = ["Contact", "FAQs", "Live Chat"];
  const legal = [
    "Accessibility",
    "Returns Policy",
    "Refund Policy",
    " Hiring Statistics",
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div id="footer" className="mt-[5px]">
      <footer className="bg-[#232323]">
        <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">

          <div className="px-10 mx-auto overflow-hidden xl:max-w-6xl 2xl:max-w-7xl md:px-20 xl:px-44 sm:py-10">
            <div className="flex flex-wrap items-center justify-between">
              <div className="w-1/3 mb-10 sm:w-auto sm:mx-4 sm:mb-0">
                <a
                  className="flex flex-col items-center justify-center group"
                  target="_blank"
                  href="https://www.facebook.com/charley.tanev/"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    className="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#F59E0B]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H293V6.26S273.43 0 251.36 0c-73.06 0-121.76 44.38-121.76 124.72v70.62h-81.85V288h81.85v224h100.17V288z"></path>
                  </svg>
                  <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-5 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#F59E0B]">
                    Facebook
                  </h5>
                </a>
              </div>

              <div className="w-1/3 mb-10 sm:w-auto sm:mx-4 sm:mb-0">
                <a
                  className="flex flex-col items-center justify-center group"
                  target="_blank"
                  href="https://github.com/charlestanev"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 496 512"
                    class="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#F59E0B]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                  <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-5 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#F59E0B]">
                    GitHub
                  </h5>
                </a>
              </div>

              {/* Discord */}
              <div className="w-1/3 mb-10 sm:w-auto sm:mx-4 sm:mb-0">
                <a
                  className="flex flex-col items-center justify-center group"
                  href="https://discord.com/users/charlestanev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 640 512"
                    className="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#F59E0B]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M524.5 62.3a1.5 1.5 0 00-.8-.7A485.1 485.1 0 00404 32a1.8 1.8 0 00-1.9 1.1 337.2 337.2 0 00-14.9 30.5 447.8 447.8 0 00-133.8 0 309.4 309.4 0 00-15.2-30.5 1.9 1.9 0 00-1.9-1.1 483.7 483.7 0 00-119.7 29.6 1.7 1.7 0 00-.8.7C49.2 169.6 32 275.9 38.5 380.5a2 2 0 00.8 1.4A488.3 488.3 0 00190.3 480a1.9 1.9 0 001.9-.7 348.2 348.2 0 0029.9-48.8 1.9 1.9 0 00-1-2.6 321.4 321.4 0 01-46.3-22.2 1.9 1.9 0 01-.2-3.1c3.1-2.3 6.3-4.6 9.3-6.9a1.8 1.8 0 011.9-.2c97.2 44.5 202.3 44.5 298.7 0a1.8 1.8 0 011.9.2c3 2.3 6.2 4.6 9.3 6.9a1.9 1.9 0 01-.2 3.1 301.7 301.7 0 01-46.3 22.2 1.9 1.9 0 00-1 2.6 391.5 391.5 0 0029.9 48.8 1.8 1.8 0 001.9.7 486.7 486.7 0 00151.2-98.1 1.9 1.9 0 00.8-1.4c8-108.3-14.5-214.6-87.2-318.2zm-302.4 268c-27.6 0-50.2-25.4-50.2-56.8s22.4-56.8 50.2-56.8c28.2 0 50.2 25.4 50.2 56.8-.2 31.4-22 56.8-50.2 56.8zm196.7 0c-27.6 0-50.2-25.4-50.2-56.8s22.4-56.8 50.2-56.8c28.2 0 50.2 25.4 50.2 56.8 0 31.4-22.6 56.8-50.2 56.8z"></path>
                  </svg>
                  <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-5 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#F59E0B]">
                    Discord
                  </h5>
                </a>
              </div>


              <div className="w-1/3 mb-10 sm:w-auto sm:mx-4 sm:mb-0">
                <a
                  className="flex flex-col items-center justify-center group"
                  target="_blank"
                  href="https://www.linkedin.com/in/elmir-tanev-843aab129/"
                >
                  {" "}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    class="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#F59E0B]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                  </svg>
                  <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-5 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#F59E0B]">
                    Linkedin
                  </h5>
                </a>
              </div>

              <div className="w-1/3 mb-10 sm:w-auto sm:mx-4 sm:mb-0">
                <a
                  className="flex flex-col items-center justify-center group"
                  target="_blank"
                  href="https://www.instagram.com/charles_tanev/"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    class="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#F59E0B]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                  <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-5 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#F59E0B]">
                    Instagram
                  </h5>
                </a>
              </div>
              <div className="w-1/3 mb-10 sm:w-auto sm:mx-4 sm:mb-0">
                <a
                  className="flex flex-col items-center justify-center group"
                  target="_blank"
                  href="mailto:charlestanev.dev@gmail.com"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#F59E0B]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                  </svg>
                  <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-5 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#F59E0B]">
                    Gmail
                  </h5>
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center h-full p-4">
            <div className="text-center">
              <p className="text-[#7b858b] font-sans">
                Elmir Charles Tanev © {currentYear}
              </p>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}