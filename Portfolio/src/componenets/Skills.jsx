

import React from "react";
import htmlImg from '../assets/html2.png'
import cssImg from '../assets/css3.png'
import jsImg from '../assets/js.png'
import nodeJs from "../assets/nodejs.png"
import mongodb from "../assets/m2.png"
import tailwindcss from "../assets/t3.png"
import reactjs from "../assets/r2.png"
import github from "../assets/github.png"
import postman from "../assets/postman.png"
import vscode from "../assets/vscode.png"
import reactRouter from "../assets/reactRouter.png"
import deployment from "../assets/deployment2.png"

const Skills = () => {
  const technolgies = [htmlImg, cssImg, jsImg]
  const backend = [nodeJs, mongodb]
  const frontend = [tailwindcss, reactjs, reactRouter]
  const tools = [postman, github, deployment, vscode]
  return (
    <div className="w-full min-h-screen p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#046E4D] to-[#46D87D] flex flex-col items-center">

      <h1 className="font-bold text-2xl sm:text-3xl text-white text-center mb-6">
        Skills
      </h1>

      {/* Main Container */}
      <div className="w-full max-w-6xl border border-[#001E2B] rounded-md bg-[#001E2B]/60 backdrop-blur-lg p-4 sm:p-6 shadow-2xl">

        {/* Skills Grid */}
        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-6">

          {/* Box 1 */}
          <div className="w-full sm:w-[90%] md:w-[400px] h-[130px] flex justify-center items-center gap-4 bg-gradient-to-br from-[#046E4D] to-[#46D87D]  border border-white rounded-md shadow-lg overflow-x-auto">

            {technolgies.map((img, i) => (
              <div key={i} className="w-[60px] sm:w-[70px] h-[70px] sm:h-[80px] border border-white  rounded-md hover:scale-110 transition">

                <img src={img} alt={`technolgies-${i}`} className="w-full h-full object-cover  bg-white" loading="lazy" />
              </div>
            ))}

          </div>

          {/* Box 2 */}
          <div className="w-full sm:w-[90%] md:w-[400px] h-[130px] flex justify-center items-center gap-4 bg-gradient-to-br from-[#046E4D] to-[#46D87D]  border border-white rounded-md shadow-lg overflow-x-auto">

            {frontend.map((img, i) => (
              <div key={i} className="w-[68px] sm:w-[75px] h-[78px] sm:h-[80px] border border-white rounded-md hover:scale-110 transition">

                <img src={img} alt={`frontend-${i}`} className="w-full h-full object-center p-2 bg-white overflow-auto" loading="lazy" />
              </div>
            ))}

          </div>

          {/* Box 3 */}


          <div className="w-full sm:w-[90%] md:w-[450px] h-[130px] flex justify-center items-center gap-4 bg-gradient-to-br from-[#046E4D] to-[#46D87D]  border border-whiterounded-md shadow-lg overflow-x-auto">

            {backend.map((img, i) => (
              <div key={i} className="w-[80px] sm:w-[90px] h-[70px] sm:h-[80px] border border-white rounded-md  hover:scale-110 transition">

                <img src={img} alt={`backend-${i}`} className="w-full h-full p-2 object-center bg-white" loading="lazy" />
              </div>
            ))}

          </div>

        </div>

        {/* Tools Section */}
        <div className="mt-8 w-full flex justify-center ">
          <div className="w-full sm:w-[90%] md:w-[450px] h-[130px] flex flex-row justify-center items-center gap-4 bg-gradient-to-br from-[#046E4D] to-[#46D87D]  border border-white rounded-md px-2 shadow-lg overflow-x-auto">

            {tools.map((img, i) => (
              <div key={i} className="w-[65px] sm:w-[80px] h-[70px] sm:h-[80px] border border-white rounded-md hover:scale-110 transition ">

                <img src={img} alt={`tools-${i}`} className="w-full h-full object-center p-2 bg-white" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div >
  );
};

export default Skills;