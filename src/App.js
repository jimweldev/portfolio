import React from 'react'
import Layout from './components/Layout/Layout'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Timeline from './components/Timeline/Timeline'
import Services from './components/Services/Services'

const App = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Services />
    </Layout>
  )
}

export default App
