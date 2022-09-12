import React from 'react'
import { motion } from 'framer-motion'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaCertificate } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
	const hours = new Date().getHours()
	let greetings

	if (hours < 12) {
		greetings = 'Good Morning!'
	} else if (hours < 18) {
		greetings = 'Good Afternoon!'
	} else {
		greetings = 'Good Evening!'
	}

	return (
		<div className="hero section" id="home">
			<div className="container">
				<div className="hero__texts">
					<p>{greetings}</p>
					<h1>
						I'm <span>Jimwel Dizon</span>
					</h1>
					<p>An aspiring Web Developer</p>
				</div>

				<div className="hero__social-medias">
					<motion.a
						href="https://www.facebook.com/jimweldizon2"
						target="_blank"
						whileHover={{ scale: 1.2, rotate: 360 }}
						whileTap={{
							scale: 0.8,
							rotate: -360,
							borderRadius: '100%',
						}}
						transition={{ duration: 0.3 }}
					>
						<BsFacebook />
					</motion.a>
					<motion.a
						href="https://www.linkedin.com/in/jimwel-marius-dizon-03b383225/"
						target="_blank"
						whileHover={{ scale: 1.2, rotate: 360 }}
						whileTap={{
							scale: 0.8,
							rotate: -360,
							borderRadius: '100%',
						}}
						transition={{ duration: 0.3 }}
					>
						<BsLinkedin />
					</motion.a>
					<motion.a
						href="https://github.com/jimweldev"
						target="_blank"
						whileHover={{ scale: 1.2, rotate: 360 }}
						whileTap={{
							scale: 0.8,
							rotate: -360,
							borderRadius: '100%',
						}}
						transition={{ duration: 0.3 }}
					>
						<BsGithub />
					</motion.a>
					<motion.a
						href="/certificates"
						target="_blank"
						whileHover={{ scale: 1.2, rotate: 360 }}
						whileTap={{
							scale: 0.8,
							rotate: -360,
							borderRadius: '100%',
						}}
						transition={{ duration: 0.3 }}
					>
						<FaCertificate />
					</motion.a>
				</div>

				<div className="hero__image">
					<img src="/images/hero2.png" alt="" />
				</div>
			</div>

			<div className="hero__overlay">
				<p>
					JIMWEL DIZON JIMWEL DIZON JIMWEL DIZON JIMWEL DIZON JIMWEL DIZON
					JIMWEL DIZON JIMWEL DIZON
				</p>
				<p>
					DIZON JIMWEL DIZON JIMWEL DIZON JIMWEL DIZON JIMWEL DIZON JIMWEL DIZON
					JIMWEL DIZON JIMWEL
				</p>
				<p>
					JIMWEL DIZON JIMWEL DIZON JIMWEL DIZON JIMWEL DIZON JIMWEL DIZON
					JIMWEL DIZON JIMWEL DIZON
				</p>
				<p>
					DIZON JIMWEL DIZON JIMWEL DIZON JIMWEL DIZON JIMWEL DIZON JIMWEL DIZON
					JIMWEL DIZON JIMWEL
				</p>
			</div>
		</div>
	)
}

export default Hero
