import React from 'react'
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
          <div className="project">
            <img src="/images/about.jpg" />
            <p>City College of Angeles Portal</p>
          </div>

          <div className="project">
            <img src="/images/about.jpg" />
            <p>City College of Angeles Portal</p>
          </div>

          <div className="project">
            <img src="/images/about.jpg" />
            <p>City College of Angeles Portal</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
