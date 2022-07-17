import React from 'react'
import './Hero.css'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className="hero section" id="home">
      <div className="container">
        <div className="hero__texts">
          <p>Good Morning!</p>
          <h1>
            I'm <span>Jimwel Dizon</span>
          </h1>
          <p>An aspiring Web Developer</p>
        </div>

        <div className="hero__social-medias">
          <a href="https://www.facebook.com/jimweldizon2" target="_blank">
            <BsFacebook />
          </a>
          <a href="https://www.facebook.com/jimweldizon2" target="_blank">
            <BsLinkedin />
          </a>
          <a href="https://www.facebook.com/jimweldizon2" target="_blank">
            <BsGithub />
          </a>
        </div>

        <div className="hero__image">
          <img src="/images/hero.png" alt="" />
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
