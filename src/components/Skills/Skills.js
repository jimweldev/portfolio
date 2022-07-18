import React from 'react'
import { motion } from 'framer-motion'
import { FaBootstrap, FaSass } from 'react-icons/fa'
import {
  SiFirebase,
  SiJquery,
  SiNextdotjs,
  SiPhp,
  SiTailwindcss,
} from 'react-icons/si'
import { GrMysql, GrReactjs } from 'react-icons/gr'
import './Skills.css'

const Skills = () => {
  return (
    <div className="skills section" id="skills">
      <div className="container--sm">
        <h2>SKILLS</h2>

        <div className="skills__wrapper">
          <div>
            <motion.div
              className="skill"
              initial={{ x: '-100%' }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill__header">
                <SiPhp />
              </div>
              <div className="skill__body">PHP</div>
            </motion.div>

            <motion.div
              className="skill"
              initial={{ x: '-100%' }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill__header">
                <SiJquery />
              </div>
              <div className="skill__body">JQuery</div>
            </motion.div>

            <motion.div
              className="skill"
              initial={{ x: '-100%' }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill__header">
                <GrMysql />
              </div>
              <div className="skill__body">MySQL</div>
            </motion.div>
          </div>

          <div>
            <motion.div
              className="skill"
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill__header">
                <GrReactjs />
              </div>
              <div className="skill__body">React JS</div>
            </motion.div>

            <motion.div
              className="skill"
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill__header">
                <SiNextdotjs />
              </div>
              <div className="skill__body">Next JS</div>
            </motion.div>

            <motion.div
              className="skill"
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill__header">
                <SiFirebase />
              </div>
              <div className="skill__body">Firebase</div>
            </motion.div>
          </div>

          <div>
            <motion.div
              className="skill"
              initial={{ x: '100%' }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill__header">
                <FaBootstrap />
              </div>
              <div className="skill__body">Bootstrap</div>
            </motion.div>

            <motion.div
              className="skill"
              initial={{ x: '100%' }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill__header">
                <SiTailwindcss />
              </div>
              <div className="skill__body">Tailwind</div>
            </motion.div>

            <motion.div
              className="skill"
              initial={{ x: '100%' }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill__header">
                <FaSass />
              </div>
              <div className="skill__body">Sass</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
