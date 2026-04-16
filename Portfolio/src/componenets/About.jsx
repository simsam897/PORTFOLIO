import React from 'react'

const About = () => {
  return (
    <>
      <div className=" flex w-full md:h-[280px] h-[500px] bg-gradient-to-br from-[#00684A] to-green-400  md:flex-row flex-col justify-center items-center p-1 gap-10  mx-auto">
        {/* text div  */}
        <div className=" w-[65%] h-[100%] sm:h-[60%] bg-[#05121a] mt-2 border-2 border-white overflow-auto rounded-xl p-2  mx-auto">
          <h2 className="font-extrabold text-white m-2 text-xl shadow-3xl">About</h2>
          <p className=" text-white font-sans text-lg  ">
            I'm a frontend developer with a passion for creating user-friendly,
            responsive web applications. I enjoy building modern, accessible
            interfaces with clean and fast code.
          </p>
        </div>

        {/* profile picture  */}

        <div className=' border-4 p-2 border-white rounded-full w-[160px] h-[150px] md:mt-4 my-4  mx-auto'>
          <img className='rounded-full border-4 w-[154px] h-[130px] border-black ' src="https://clipground.com/images/profile-png-5.png" alt="" />
        </div>




      </div>
    </>
  )
}

export default About