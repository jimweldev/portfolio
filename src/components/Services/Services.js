import React from 'react'
import './Services.css'
import { FaBootstrap } from 'react-icons/fa'

const Services = () => {
  return (
    <div className="services section" id="services">
      <div className="container--sm">
        <h2>WHAT I DO</h2>

        <div className="services__wrapper">
          <div className="service">
            <FaBootstrap />
            <p>Front-End Development</p>
          </div>

          <div className="service">
            <FaBootstrap />
            <p>Back-End Development</p>
          </div>

          <div className="service">
            <FaBootstrap />
            <p>Database Management</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
