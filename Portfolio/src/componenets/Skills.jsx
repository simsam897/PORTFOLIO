// import React from "react";

// const Skills = () => {
//   return (
//     <>
//       <div className="  w-full h-[1300px] skill-3xl:h-[400px]  p-8 bg-[#00684A]  flex-col justify-items-center items-center  ">
//         <h1 className="font-bold text-3xl text-white text-center m-4">
//           Skills
//         </h1>

//         <div className="border-2 w-[80%] h-[90%] absolute border-white p-8 shadow-2xl rounded-md bg-white/10 backdrop:blur-xl mt-4 ">
//           <div className="absolute p-10 inset-0 bg-gradient-to-tr from-white/20  via-white/20  to-transparent opacity-100 ">
//             <div className="2xl:flex-row flex flex-col justify-around items-center  gap-14 z-50">
//               {/* first box */}
//               <div className=" border-2 border-black bg-gradient-to-br from-[#00684A] to-green-400  w-[400px] h-[150px] flex justify-center items-center gap-6 rounded-md overflow-auto z-50 shadow-lg  ">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   x="0px"
//                   y="0px"
//                   width="100"
//                   height="100"
//                   viewBox="0 0 48 48"
//                   className="p-1 w-[80px] h-[90px] rounded-md  border-2 border-white hover:scale-110 transition duration-300"
//                 >
//                   <path
//                     fill="#E65100"
//                     d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
//                   ></path>
//                   <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
//                   <path
//                     fill="#FFF"
//                     d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
//                   ></path>
//                   <path
//                     fill="#EEE"
//                     d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
//                   ></path>
//                 </svg>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   x="0px"
//                   y="0px"
//                   width="100"
//                   height="100"
//                   viewBox="0 0 48 48"
//                   className="p-1 w-[80px] h-[90px] rounded-md  border-2 border-white hover:scale-110 transition duration-300"
//                 >
//                   <path
//                     fill="#0277BD"
//                     d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
//                   ></path>
//                   <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
//                   <path
//                     fill="#FFF"
//                     d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
//                   ></path>
//                   <path
//                     fill="#EEE"
//                     d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
//                   ></path>
//                 </svg>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   x="0px"
//                   y="0px"
//                   width="100"
//                   height="100"
//                   viewBox="0 0 48 48"
//                   className="p-1 w-[80px] h-[90px] border-2 border-white rounded-md  hover:scale-110 transition duration-300"
//                 >
//                   <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
//                   <path
//                     fill="#000001"
//                     d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
//                   ></path>
//                 </svg>
//               </div>

//               {/* second box  */}
//               <div className=" border-2 border-black bg-gradient-to-br from-[#00684A] to-green-400 w-[450px] h-[150px] flex justify-center items-center gap-6 rounded-md overflow-auto z-50 shadow-lg  ">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 48 48"
//                   class="p-1 w-[80px] h-[90px] border-2 border-white rounded-md  hover:scale-110 transition duration-300"
//                 >
//                   <path
//                     class="fill-sky-400"
//                     d="M24 14c-6 0-9.75 3-11.25 9 
//     2.25-3 4.875-4.125 7.875-3.375 
//     1.712.428 2.938 1.673 4.298 3.055 
//     2.216 2.253 4.782 4.86 9.077 4.86 
//     6 0 9.75-3 11.25-9 
//     -2.25 3-4.875 4.125-7.875 3.375 
//     -1.712-.428-2.938-1.673-4.298-3.055 
//     -2.216-2.253-4.782-4.86-9.077-4.86zM12.75 27c-6 0-9.75 3-11.25 9 
//     2.25-3 4.875-4.125 7.875-3.375 
//     1.712.428 2.938 1.673 4.298 3.055 
//     2.216 2.253 4.782 4.86 9.077 4.86 
//     6 0 9.75-3 11.25-9 
//     -2.25 3-4.875 4.125-7.875 3.375 
//     -1.712-.428-2.938-1.673-4.298-3.055 
//     -2.216-2.253-4.782-4.86-9.077-4.86z"
//                   />
//                 </svg>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 841.9 595.3"
//                   class="p-1 w-[80px] h-[90px] border-2 border-white rounded-md hover:scale-110 transition duration-300"
//                 >
//                   {/* <!-- Outer rings --> */}
//                   <g fill="none" stroke="#61DAFB" stroke-width="30">
//                     <ellipse cx="420.9" cy="296.5" rx="300" ry="120" />
//                     <ellipse
//                       cx="420.9"
//                       cy="296.5"
//                       rx="300"
//                       ry="120"
//                       transform="rotate(60 420.9 296.5)"
//                     />
//                     <ellipse
//                       cx="420.9"
//                       cy="296.5"
//                       rx="300"
//                       ry="120"
//                       transform="rotate(120 420.9 296.5)"
//                     />
//                   </g>

//                   {/* <!-- Center circle --> */}
//                   <circle cx="420.9" cy="296.5" r="40" fill="#61DAFB" />
//                 </svg>
//                 <img
//                   className="p-1 w-[80px] h-[90px] rounded-md  border-2 border-white hover:scale-110 transition duration-300"
//                   src="\src\assets\reactRouter.png"
//                   alt=""
//                 />
//               </div>

//               {/* third box  */}
//               <div className=" border-2 border-black bg-gradient-to-br from-green-400 to-[#00684A]  w-[400px] h-[150px] flex justify-center items-center gap-6 rounded-md overflow-auto z-50 shadow-lg  ">
//                 <img
//                   className="p-1 w-[120px] h-[90px] rounded-md  border-2 border-white hover:scale-110 transition duration-300"
//                   src="\src\assets\mongodb.svg"
//                   alt=""
//                 />
//                 <img
//                   className="p-1 w-[120px] h-[90px] rounded-md  border-2 border-white hover:scale-110 transition duration-300"
//                   src="\src\assets\node.png"
//                   alt=""
//                 />
//               </div>
//             </div>

//             {/* tools box  */}

//             <div className=" border-2 border-black bg-gradient-to-br from-[#00684A] to-green-400 w-[70%] h-[150px] flex justify-center items-center gap-6 rounded-md overflow-auto z-50 shadow-lg mx-auto mt-10  ">
//               <img
//                 className="p-1 w-[120px] h-[90px] rounded-md  border-2 border-white hover:scale-110 transition duration-300"
//                 src="\src\assets\GitHub.png"
//                 alt=""
//               />

//               <img
//                 className="p-1 w-[120px] h-[90px] rounded-md  border-2 border-white hover:scale-110 transition duration-300"
//                 src="\src\assets\vscode.png"
//                 alt=""
//               />

//               <img
//                 className="p-1 w-[120px] h-[90px] rounded-md  border-2 border-white object-center hover:scale-110 transition duration-300"
//                 src="\src\assets\p2.png"
//                 alt=""
//               />

//               <img
//                 className="p-1 w-[120px] h-[90px] rounded-md  border-2 border-white object-center hover:scale-110 transition duration-300"
//                 src="\src\assets\deployment2.png"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>

//       </div>
//     </>
//   );
// };

// export default Skills;




import React from "react";

const Skills = () => {
  return (
    <div className="w-full min-h-screen p-4 sm:p-6 md:p-8 bg-[#00684A] flex flex-col items-center">

      <h1 className="font-bold text-2xl sm:text-3xl text-white text-center mb-6">
        Skills
      </h1>

      {/* Main Container */}
      <div className="w-full max-w-6xl border border-white rounded-md bg-white/10 backdrop-blur-xl p-4 sm:p-6 shadow-2xl">

        {/* Skills Grid */}
        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-6">

          {/* Box 1 */}
          <div className="w-full sm:w-[90%] md:w-[400px] h-[130px] flex justify-center items-center gap-4 bg-gradient-to-br from-[#00684A] to-green-400 border border-black rounded-md shadow-lg overflow-x-auto">

            {[1, 2, 3].map((_, i) => (
              <div key={i} className="w-[60px] sm:w-[70px] h-[70px] sm:h-[80px] border border-white rounded-md hover:scale-110 transition"></div>
            ))}

          </div>

          {/* Box 2 */}
          <div className="w-full sm:w-[90%] md:w-[450px] h-[130px] flex justify-center items-center gap-4 bg-gradient-to-br from-[#00684A] to-green-400 border border-black rounded-md shadow-lg overflow-x-auto">

            {[1, 2, 3].map((_, i) => (
              <div key={i} className="w-[60px] sm:w-[70px] h-[70px] sm:h-[80px] border border-white rounded-md hover:scale-110 transition"></div>
            ))}

          </div>

          {/* Box 3 */}
          <div className="w-full sm:w-[90%] md:w-[400px] h-[130px] flex justify-center items-center gap-4 bg-gradient-to-br from-green-400 to-[#00684A] border border-black rounded-md shadow-lg overflow-x-auto">

            {[1, 2].map((_, i) => (
              <div key={i} className="w-[80px] sm:w-[100px] h-[70px] sm:h-[80px] border border-white rounded-md hover:scale-110 transition"></div>
            ))}

          </div>

        </div>

        {/* Tools Section */}
        <div className="mt-8 w-full flex justify-center p-4">
          <div className="w-[1000px] sm:w-[90%] md:w-[70%] h-[130px] flex flex-row justify-center items-center gap-4 bg-gradient-to-br from-[#00684A] to-green-400 border border-black rounded-md shadow-lg overflow-x-auto">

            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className=" w-[90px] h-[70px] p-2 mx-2
               border border-white rounded-sm 
               hover:scale-125 transition duration-300"
              ></div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;