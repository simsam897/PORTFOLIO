import React from 'react'

const Hero = () => {
  return (
    <>
      <section className="mx-auto overflow-auto p-10 w-full md:flex flex-col justify-center gap-16 bg-green-200 items-center animate-slide-from-left md:flex-row">
        {/* text-section */}
        <div className="flex-col w-[50%S] justify-center items-center ">
          <div className="inline-flex h-6 w-6 items-center justify-center rounded border text-xs font-semibold mb-6">
            SS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simranjit Singh
          </h1>
          <p className="mt-2 text-xl text-[#00684A] font-semibold">
            Frontend Developer
          </p>
          <p className="mt-4 text-slate-600">
            Building clean, interactive UIs with React & modern JavaScript.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-md bg-[#00684A] px-4 py-2 text-white hover:bg-green-500"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-black px-4 py-2 text-white bg-black hover:bg-[#22C55E] hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="mt-12 mb-6 md:flex w-[50%]  items-center justify-center ">
          <div className="h-64 w-64 rounded-3xl p-1 bg-gradient-to-b bg-green-400">
            <img
              src="Gemini_Generated_Image_h5maqfh5maqfh5ma.png"
              alt="Avatar"
              className="h-full w-full rounded-3xl object-cover scale-100"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero