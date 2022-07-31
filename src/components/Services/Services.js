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
          <div>
            <motion.div
              className="service"
              whileInView={{ rotate: 360 }}
              transition={{ duration: 0.4 }}
            >
              <FaPaintRoller />
            </motion.div>

            <p>Front-End Development</p>
          </div>

          <div>
            <motion.div
              className="service"
              whileInView={{ rotate: -720 }}
              transition={{ duration: 0.8 }}
            >
              <FaCode />
            </motion.div>

            <p>Back-End Development</p>
          </div>

          <div>
            <motion.div
              className="service"
              whileInView={{ rotate: 360 }}
              transition={{ duration: 0.4 }}
            >
              <FaDatabase />
            </motion.div>

            <p>Database Management</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
