import React from 'react'
import { motion } from 'framer-motion'
import './Project.css'

const Project = ({ title, image, link }) => {
  return (
    <motion.a
      className="project"
      href={link}
      initial={{ x: '-100%' }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.4 }}
      target="_blank"
    >
      <img src={image} />
      <p>{title}</p>
    </motion.a>
  )
}

export default Project
