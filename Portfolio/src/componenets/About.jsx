import React from 'react'

const About = () => {
  return (
    <>
      {/* <div className=" flex w-full md:h-[280px] h-[500px] bg-gradient-to-br from-[#00684A] to-green-400  md:flex-row flex-col justify-center items-center p-1 gap-10  mx-auto">
        {/* text div  */}
      {/* <div className=" w-[65%] h-[100%] sm:h-[60%] bg-[#001E2B] mt-2 border-2 border-white overflow-auto rounded-xl p-2  mx-auto">
        <h2 className="font-extrabold text-white m-2 text-xl shadow-3xl">About</h2>
        <p className=" text-white font-sans text-lg  "> */}
      {/* I'm a frontend developer with a passion for creating user-friendly,
          responsive web applications. I enjoy building modern, accessible
          interfaces with clean and fast code.
        </p>
      </div> */}

      {/* profile picture  */}

      {/* // <div className=' border-4 p-2 border-white rounded-full w-[160px] h-[150px] md:mt-4 my-4  mx-auto'>
      //   <img className='rounded-full border-4 w-[154px] h-[130px] border-black ' src="https://clipground.com/images/profile-png-5.png" alt="" />
      // </div>
 */}



      {/* </div> */}


      <div className="w-full min-h-max bg-[#0E7E54] flex items-center justify-center px-4 py-10 overflow-auto">

        <div className="max-w-6xl w-full bg-[#001E2B] text-white rounded-2xl p-8 md:p-12 border border-gray-600 shadow-lg">

          <div className="grid md:grid-cols-2 gap-10">

            {/* LEFT SIDE */}
            <div>
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E7E54] mb-6">
                ABOUT ME
              </h2>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate frontend developer who loves building clean,
                responsive and user-friendly web applications.
              </p>

              <p className="text-gray-300 leading-relaxed mb-8">
                I enjoy turning ideas into real, functional and beautiful interfaces.
              </p>

              {/* Quote Box */}
              <div className="bg-[#012733] p-5 rounded-xl border border-gray-700 mb-8">
                <p className="text-gray-300 italic">
                  "I'm focused on improving my skills every day and building
                  projects that make a difference."
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col justify-between">

              {/* Cards */}
              <div className="space-y-6">

                <div className="border-b border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold mb-1">
                    Learning & Growing
                  </h3>
                  <p className="text-gray-400 text-sm">
                    I'm constantly learning new technologies and improving my skills.
                  </p>
                </div>

                <div className="border-b border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold mb-1">
                    Building Projects
                  </h3>
                  <p className="text-gray-400 text-sm">
                    I build small projects to practice and bring ideas to life.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Passionate
                  </h3>
                  <p className="text-gray-400 text-sm">
                    I enjoy solving problems and creating smooth user experiences.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-8">
                <a
                  href="/cv.pdf"
                  download
                  className="bg-[#0E7E54] hover:bg-[#0c6b48] px-6 py-2 rounded-lg font-medium transition"
                >
                  Download CV
                </a>


              </div>

            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default About