import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = (props) => {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;






  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (


    <>
      <section className='  bg-gradient-to-br  from-[#00684A] to-green-400 overflow-auto pb-8  ' ref={props.contactRef}>
        <div className='pt-12 pb-6'>
          <h1 className='text-center font-semibold text-2xl text-white '>Contact Me </h1>
        </div>



        <div className='w-[80%] h-600px flex flex-col xl:flex pt-10 justify-center items-center mx-auto gap-6 glow-card  border-2 border-white/20 bg-white/20 backdrop-blur-3xl  shadow-[0_0_40px_rgba(0,255,150,0.3)]  z-10 overflow-hidden '>

          {/* contact form */}
          <form ref={form}
            onSubmit={sendEmail}
            className='flex-col border-2 p-8 rounded-lg flex  justify-center items-center w-[80%] md:w-[50%] h-[70%] gap-6   px-4  '>
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
              className="px-6 py-3 self-center bg-[#001E2B] text-white font-medium rounded-md hover:bg-[#05704E] transition"
            >
              Send Message
            </button>
          </form>


          <hr className='bg-black w-full' />
          {/* other options  */}

          <div className="w-full sm:w-[70%] flex flex-wrap justify-center gap-4 items-center p-4">

            <a href="https://github.com/simsam897" target="_blank" rel="noopener noreferrer">
              <button className="
      w-[140px] sm:w-[160px] md:w-[180px]
      text-sm sm:text-base
      px-4 py-2 sm:px-5 sm:py-2.5
      border-2 border-white
      text-white bg-[#001E2B]
      rounded-lg font-semibold shadow-lg
      hover:bg-[#05704E] transition duration-200
    ">
                GitHub
              </button>
            </a>

            <a href="https://www.linkedin.com/in/simranjit-singh-944705232" target="_blank" rel="noopener noreferrer">
              <button className="
      w-[140px] sm:w-[160px] md:w-[180px]
      text-sm sm:text-base
      px-4 py-2 sm:px-5 sm:py-2.5
      border-2 border-white
      text-white bg-[#001E2B]
      rounded-lg font-semibold shadow-lg
      hover:bg-[#05704E] transition duration-200
    ">
                LinkedIn
              </button>
            </a>

            <a href="mailto:simranjitsinghwebdev@outlook.com">
              <button className="
      w-[140px] sm:w-[160px] md:w-[180px]
      text-sm sm:text-base
      px-4 py-2 sm:px-5 sm:py-2.5
      border-2 border-white
      text-white bg-[#001E2B]
      rounded-lg font-semibold shadow-lg
      hover:bg-[#05704E] transition duration-200
    ">
                Gmail
              </button>
            </a>

          </div>
          <div className=''></div>
        </div>

      </section >
    </>
  )
}

export default Contact