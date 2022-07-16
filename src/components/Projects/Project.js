import React from 'react'
import './Project.css'

const Project = ({ title, image }) => {
  return (
    <div className="project">
      <img src={image} />
      <p>{title}</p>
    </div>
  )
}

export default Project
