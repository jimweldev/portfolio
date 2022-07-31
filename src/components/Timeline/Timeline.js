import React from 'react'
import { motion } from 'framer-motion'
import './Timeline.css'

const Timeline = () => {
  return (
    <div className="timeline section" id="timeline">
      <div className="container--sm">
        <div className="timeline__cards">
          <div className="timeline__line"></div>

          <motion.div
            className="timeline__card"
            initial={{ x: '100%' }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h4>COLLEGE</h4>
            <p className="">City College of Angeles</p>
            <p className="">
              <i>Bachelor of Science in Information Systems</i>
            </p>
            <p>2018 - 2022</p>
          </motion.div>

          <motion.div
            className="timeline__card"
            initial={{ x: '100%' }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h4>SENIOR HIGH SCHOOL</h4>
            <p className="">Angeles City Science High School</p>
            <p className="">
              <i>STEM</i>
            </p>
            <p>2016 - 2018</p>
          </motion.div>

          <motion.div
            className="timeline__card"
            initial={{ x: '100%' }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h4>JUNIOR HIGH SCHOOL</h4>
            <p className="">Francisco G. Nepomuceno Memorial High School</p>
            <p className="">
              <i>Cookery</i>
            </p>
            <p>2014 - 2018</p>
          </motion.div>
        </div>

        <div className="timeline__texts">
          <h2>TIMELINE</h2>
          <p>"For nothing will be impossible with God."</p>
          <p>— Luke 1:37</p>
        </div>
      </div>
    </div>
  )
}

export default Timeline
