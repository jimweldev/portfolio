import React from 'react'
import './Services.css'
import { FaCode, FaDatabase, FaPaintRoller } from 'react-icons/fa'

const Services = () => {
  return (
    <div className="services section" id="services">
      <div className="container--sm">
        <h2>WHAT I DO</h2>

        <div className="services__wrapper">
          <div className="service">
            <FaPaintRoller />
            <p>Front-End Development</p>
          </div>

          <div className="service">
            <FaCode />
            <p>Back-End Development</p>
          </div>

          <div className="service">
            <FaDatabase />
            <p>Database Management</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
