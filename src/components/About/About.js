import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
	return (
		<div className="about section" id="about">
			<div className="container--sm">
				<motion.div
					className="about__image"
					initial={{ x: '100%' }}
					whileInView={{ x: 0 }}
					transition={{ duration: 0.3 }}
				>
					<img src="/images/about2.jpg" alt="" />
				</motion.div>

				<div className="about__texts">
					<h2>WHO I AM</h2>
					<p>
						My name is Jimwel Dizon. I am 22 years old from Angeles City,
						Pampanga. I have been living with my parents and two siblings. I
						have completed my Bachelor of Science in Information Systems degree
						from City College of Angeles.
					</p>
					<p>
						I am interested in programming, games, and puzzles. Apart from these
						hobbies, I love to hang out with my close friends. My main goal is
						to become a Full-stack Web Developer.
					</p>
				</div>
			</div>
		</div>
	)
}

export default About
