import React from 'react'
import { motion } from 'framer-motion'
import './Project.css'

const Project = ({ title, image }) => {
  return (
    <motion.div
      className="project"
      initial={{ x: '-100%' }}
      whileInView={{ x: 0 }}
    >
      <img src={image} />
      <p>{title}</p>
    </motion.div>
  )
}

export default Project
