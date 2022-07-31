import React from 'react'
import { motion } from 'framer-motion'
import { FaNodeJs, FaReact, FaWindows } from 'react-icons/fa'
import { SiApache, SiExpress, SiMongodb, SiPhp } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import './Skills.css'

const Skills = () => {
  return (
    <div className="skills section" id="skills">
      <div className="container--sm">
        <h2>SKILLS</h2>

        <div className="skills__wrapper">
          <motion.div
            className="skill"
            initial={{ x: '-100%' }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="skill__header">
              <SiMongodb />
            </div>
            <div className="skill__body">Mongo DB</div>
          </motion.div>

          <motion.div
            className="skill"
            initial={{ x: '-100%' }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="skill__header">
              <SiExpress />
            </div>
            <div className="skill__body">Express JS</div>
          </motion.div>

          <motion.div
            className="skill"
            initial={{ x: '-100%' }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="skill__header">
              <FaReact />
            </div>
            <div className="skill__body">React JS</div>
          </motion.div>

          <motion.div
            className="skill"
            initial={{ x: '-100%' }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="skill__header">
              <FaNodeJs />
            </div>
            <div className="skill__body">Node JS</div>
          </motion.div>

          <motion.div
            className="skill"
            initial={{ x: '100%' }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="skill__header">
              <FaWindows />
            </div>
            <div className="skill__body">Windows</div>
          </motion.div>

          <motion.div
            className="skill"
            initial={{ x: '100%' }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="skill__header">
              <SiApache />
            </div>
            <div className="skill__body">Apache</div>
          </motion.div>

          <motion.div
            className="skill"
            initial={{ x: '100%' }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="skill__header">
              <GrMysql />
            </div>
            <div className="skill__body">MySQL</div>
          </motion.div>

          <motion.div
            className="skill"
            initial={{ x: '100%' }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="skill__header">
              <SiPhp />
            </div>
            <div className="skill__body">PHP</div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Skills
