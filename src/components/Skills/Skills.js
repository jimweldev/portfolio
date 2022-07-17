import React from 'react'
import './Skills.css'
import { FaBootstrap, FaSass } from 'react-icons/fa'
import {
  SiFirebase,
  SiJquery,
  SiNextdotjs,
  SiPhp,
  SiTailwindcss,
} from 'react-icons/si'
import { GrMysql, GrReactjs } from 'react-icons/gr'

const Skills = () => {
  return (
    <div className="skills section" id="skills">
      <div className="container--sm">
        <h2>SKILLS</h2>

        <div className="skills__wrapper">
          <div>
            <div className="skill">
              <div className="skill__header">
                <SiPhp />
              </div>
              <div className="skill__body">PHP</div>
            </div>

            <div className="skill">
              <div className="skill__header">
                <SiJquery />
              </div>
              <div className="skill__body">JQuery</div>
            </div>

            <div className="skill">
              <div className="skill__header">
                <GrMysql />
              </div>
              <div className="skill__body">MySQL</div>
            </div>
          </div>

          <div>
            <div className="skill">
              <div className="skill__header">
                <GrReactjs />
              </div>
              <div className="skill__body">React JS</div>
            </div>

            <div className="skill">
              <div className="skill__header">
                <SiNextdotjs />
              </div>
              <div className="skill__body">Next JS</div>
            </div>

            <div className="skill">
              <div className="skill__header">
                <SiFirebase />
              </div>
              <div className="skill__body">Firebase</div>
            </div>
          </div>

          <div>
            <div className="skill">
              <div className="skill__header">
                <FaBootstrap />
              </div>
              <div className="skill__body">Bootstrap</div>
            </div>

            <div className="skill">
              <div className="skill__header">
                <SiTailwindcss />
              </div>
              <div className="skill__body">Tailwind</div>
            </div>

            <div className="skill">
              <div className="skill__header">
                <FaSass />
              </div>
              <div className="skill__body">Sass</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
