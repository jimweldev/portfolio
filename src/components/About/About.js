import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about section">
      <div className="container--sm">
        <div className="about__image">
          <img src="/images/about.jpg" alt="" />
        </div>

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
