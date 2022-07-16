import React from 'react'
import Project from './Project'
import './Projects.css'

const Projects = () => {
  return (
    <div className="projects section">
      <div className="container--sm">
        <div>
          <h2>PROJECTS</h2>
          <p>These Projects are the best projects that I made so far.</p>
          <a href="">GitHub</a>
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
