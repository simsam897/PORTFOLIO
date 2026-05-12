// import React from 'react'

// const Hero = (props) => {
//   return (
//     <>
//       <section className="mx-auto overflow-auto p-10 w-full h-max md:flex flex-col justify-center items-center   gap-12 bg-gradient-to-tr from-[#46D87D] to-[#046E4D] animate-slide-from-left md:flex-row">
//         {/* text-section */}
//         <div className="flex flex-col w-[50%] justify-center items-center sm:ml-40">
//           <div className="inline-flex h-6 w-6  items-center justify-center rounded border text-[#001E2B] text-xs font-semibold mb-6">
//             SS
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold text-[#001E2B] tracking-tight">
//             Simranjit Singh
//           </h1>
//           <p className="mt-2 text-2xl text-white font-semibold ">
//             Frontend Developer
//           </p>
//           <p className="mt-4 text-[#001E2B] font-bold">
//             Building clean, interactive UIs with React & modern JavaScript.
//           </p>

//           <div className="mt-6 flex items-center gap-3">
//             <a
//               href="#projects"
//               className="inline-flex items-center rounded-md bg-[#00684A] px-4 py-2 text-white hover:bg-green-500"
//             >
//               View Projects
//             </a>

//             <button className="inline-flex items-center rounded-md border border-[#001E2B] px-4 py-2 text-white bg-[#001E2B] hover:bg-[#22C55E] hover:text-white" onClick={props.scrollToContact}>Contact Me</button>

//           </div>
//         </div>

//         {/* Profile Picture */}
//         <div className="mt-12 mb-6 md:flex w-[50%]  items-center justify-center ">
//           <div className="h-64 w-64 rounded-3xl p-1 bg-gradient-to-b bg-green-400 flex justify-center items-center">
//             <img
//               src="\src\assets\posture.png"
//               alt="Avatar"
//               className="h-[95%] w-[95%] rounded-3xl object-center scale-140"
//             />
//           </div>
//         </div>
//       </section>

//     </>
//   )
// }

// export default Hero;




// import React from "react";

// const Hero = (props) => {
//   return (
//     <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-14 py-10 gap-10 bg-gradient-to-tr from-[#46D87D] to-[#046E4D]">

//       {/* TEXT SECTION */}
//       <div className="w-full md:w-1/2 max-w-xl mx-auto flex flex-col items-start text-left">

//         {/* Logo */}
//         <div className="inline-flex h-8 w-8 items-center justify-center rounded border text-[#001E2B] text-sm font-semibold mb-6">
//           SS
//         </div>

//         {/* Heading */}
//         <h1 className="text-4xl md:text-5xl font-bold text-[#001E2B] tracking-tight leading-tight">
//           Simranjit Singh
//         </h1>

//         {/* Role */}
//         <p className="mt-2 text-xl md:text-2xl text-white font-semibold">
//           Frontend Developer
//         </p>

//         {/* Description */}
//         <p className="mt-4 text-[#001E2B] font-medium">
//           Building clean, interactive UIs with React & modern JavaScript.
//         </p>

//         {/* Buttons */}
//         <div className="mt-6 flex flex-wrap items-center gap-4">
//           <a
//             href="#projects"
//             className="inline-flex items-center rounded-md bg-[#00684A] px-5 py-2.5 text-white hover:bg-green-500 transition"
//           >
//             View Projects
//           </a>

//           <button
//             onClick={props.scrollToContact}
//             className="inline-flex items-center rounded-md border border-[#001E2B] px-5 py-2.5 text-white bg-[#001E2B] hover:bg-[#22C55E] transition"
//           >
//             Contact Me
//           </button>
//         </div>
//       </div>

//       {/* IMAGE SECTION */}
//       <div className="w-full md:w-1/2 flex justify-center items-center">
//         <div className="h-64 w-64 md:h-72 md:w-72 rounded-3xl p-1 bg-green-400 flex justify-center items-center shadow-lg">
//           <img
//             src="/assets/posture.png"  // ✅ FIXED PATH
//             alt="Avatar"
//             className="h-full w-full rounded-3xl object-cover"
//           />
//         </div>
//       </div>

//     </section>
//   );
// };

// export default Hero;


import React from "react";
import myImage from "../assets/posture.png"

const Hero = (props) => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-14 py-16 md:py-20 lg:py-24 gap-10 bg-gradient-to-tr from-[#46D87D] to-[#046E4D]">
      {/* TEXT SECTION */}
      <div className="w-full lg:w-1/2 max-w-xl mx-auto flex flex-col items-start text-left">

        <div className="inline-flex h-8 w-8 items-center justify-center rounded border text-[#001E2B] text-sm font-semibold mb-6">
          SS
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#001E2B] tracking-tight leading-tight">
          Simranjit Singh
        </h1>

        <p className="mt-2 text-xl md:text-2xl text-white font-semibold">
          Frontend Developer
        </p>

        <p className="mt-4 text-[#001E2B] font-medium">
          Building clean, interactive UIs with React & modern JavaScript.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center rounded-md bg-[#00684A] px-5 py-2.5 text-white hover:bg-green-500 transition"
          >
            View Projects
          </a>

          <button
            onClick={props.scrollToContact}
            className="inline-flex items-center rounded-md border border-[#001E2B] px-5 py-2.5 text-white bg-[#001E2B] hover:bg-[#22C55E] transition"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="h-64 w-64 md:h-72 md:w-72 rounded-3xl p-1 bg-green-400 flex justify-center items-center shadow-lg">
          <img
            src={myImage}
            alt="Avatar"
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;