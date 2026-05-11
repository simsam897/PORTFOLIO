
import React from 'react'


import { Header } from './componenets/Header.jsx'
import Hero from './componenets/Hero.jsx'
import About from './componenets/About.jsx'
import Skills from './componenets/Skills.jsx'
import Projects from './componenets/Projects.jsx'
import Education from './componenets/Education.jsx'
import Contact from './componenets/Contact.jsx'
import Footer from './componenets/Footer.jsx'

import { useRef } from 'react'

function App() {
  const contactRef = useRef(null)
  const scrollToContact = () => {

    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <Header scrollToContact={scrollToContact} />
      <Hero scrollToContact={scrollToContact} />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact contactRef={contactRef} />
      <Footer />

    </>
  )
}

export default App
