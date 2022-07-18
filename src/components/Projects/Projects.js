import React from 'react'
import Project from './Project'
import { motion } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  return (
    <div className="projects section" id="projects">
      <div className="container--sm">
        <div>
          <h2>PROJECTS</h2>
          <p>These Projects are the best projects that I made so far.</p>
          <p>
            <a href="https://github.com/jimweldev">GitHub</a>
          </p>
        </div>

        <div className="projects_wrapper">
          <Project
            title="City College of Angeles Portal"
            image="/images/about.jpg"
          />
          <Project title="K&Q DIY Accessories" image="/images/about.jpg" />
          <Project title="Paluto" image="/images/about.jpg" />
        </div>
      </div>
    </div>
  )
}

export default Projects
