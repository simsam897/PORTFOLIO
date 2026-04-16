import React from 'react'

const Contact = () => {
  return (


    <>
      <section className='  bg-gradient-to-br  from-[#00684A] to-green-400 overflow-auto pb-8 '>
        <div className='pt-12 pb-6'>
          <h1 className='text-center font-semibold text-2xl text-white '>Contact Me </h1>
        </div>



        <div className='w-[80%] h-600px flex flex-col xl:flex pt-10 justify-center items-center mx-auto gap-6   border-2 border-white/20 bg-white/20 backdrop-blur-3xl  shadow-[0_0_40px_rgba(0,255,150,0.3)]  z-10 overflow-auto '>

          {/* contact form */}
          <form action="
        " className='flex-col border-2 p-8 rounded-lg flex  justify-center items-center w-[80%] md:w-[50%] h-[70%] gap-6   px-4  '>
            <input
              type="text"
              placeholder="Name"
              name='user_name'
              className="w-full p-3 rounded-md border border-gray-500 bg-white outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name='user_email'
              placeholder="Email"
              className="w-full p-3 rounded-md border border-white bg-white  outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Message"
              name='message'
              rows="4"
              className="w-full p-3 rounded-md border border-white bg-green-200  outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              value='Send'
              className="px-6 py-3 self-center bg-blue-600  text-white font-medium rounded-md hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>


<hr className='bg-black w-full' />
          {/* other options  */}

          <div className='  sm:w-[70%]  h-[70%]  flex flex-row  justify-center gap-4 items-center overflow-auto   p-4 '>
            <button className='  sm:w-[200px] md:h-[70px] border-2 border-white text-white bg-black md:text-lg font-semibold text-sm rounded-lg shadow-xl p-3 overflow-auto'>GitHub</button>
            <button className='  sm:w-[200px] md:h-[70px] border-2 text-sm border-white text-white bg-black md:text-lg rounded-lg font-semibold shadow-xl p-3'>LinkedIn</button>
            <button className='  sm:w-[200px] md:h-[70px] text-sm border-2 border-white text-white bg-black md:text-lg rounded-lg font-semibold shadow-xl p-3  '>Gmail</button>
          </div>
          <div className=''></div>
        </div>

      </section >
    </>
  )
}

export default Contact