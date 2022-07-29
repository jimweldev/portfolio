import React from 'react'

import Header from '../components/Header/Header'
import About from '../components/About/About'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Services from '../components/Services/Services'
import Skills from '../components/Skills/Skills'
import Timeline from '../components/Timeline/Timeline'
import Footer from './../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Services />
      <Footer />
    </>
  )
}

export default Home
