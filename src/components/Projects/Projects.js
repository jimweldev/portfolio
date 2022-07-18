import React from 'react'
import Project from './Project'
import './Projects.css'

const Projects = () => {
  return (
    <div className="projects section" id="projects">
      <div className="container--sm">
        <div>
          <h2>PROJECTS</h2>
          <p>These Projects are the best projects that I made so far.</p>
          <p>
            <a href="https://github.com/jimweldev" target="_blank">
              GitHub
            </a>
          </p>
        </div>

        <div className="projects_wrapper">
          <Project
            title="City College of Angeles Portal"
            image="/images/cca-portal-project.png"
            link="https://portal.cca.edu.ph/"
          />
          <Project
            title="K&Q DIY Accessories"
            image="/images/kandq-project.png"
            link="https://github.com/jimweldev/kandq"
          />
          <Project
            title="Paluto"
            image="/images/paluto-project.png"
            link="https://github.com/jimweldev/paluto"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
