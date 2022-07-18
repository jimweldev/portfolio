import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaPaintRoller } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  return (
    <div className="services section" id="services">
      <div className="container--sm">
        <h2>WHAT I DO</h2>

        <div className="services__wrapper">
          <motion.div
            className="service"
            whileInView={{ rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <FaPaintRoller />
            <p>Front-End Development</p>
          </motion.div>

          <motion.div
            className="service"
            whileInView={{ rotate: 720 }}
            transition={{ duration: 0.6 }}
          >
            <FaCode />
            <p>Back-End Development</p>
          </motion.div>

          <motion.div
            className="service"
            whileInView={{ rotate: -360 }}
            transition={{ duration: 0.3 }}
          >
            <FaDatabase />
            <p>Database Management</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Services
