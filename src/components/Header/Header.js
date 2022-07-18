import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-scroll'
import './Header.css'

const Header = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false)
  const headerRef = useRef(null)

  // remove body scroll when header is active
  const handleHeaderToggle = () => {
    setIsHeaderActive(!isHeaderActive)

    if (isHeaderActive) {
      document.body.style.overflowY = 'scroll'
    } else {
      document.body.style.overflowY = 'hidden'
    }
  }

  // remove active class on header on resize
  // change height of header depends on inner width
  window.addEventListener('resize', () => {
    setIsHeaderActive(false)

    document.body.style.overflowY = 'scroll'

    if (headerRef && headerRef.current) {
      if (window.innerWidth > 1100) {
        headerRef.current.style.height = '120px'
      } else {
        headerRef.current.style.height = '100px'
      }
    }
  })

  // change header background color when scrolled
  // change height of header depends on inner width
  window.addEventListener('scroll', () => {
    if (headerRef && headerRef.current) {
      if (window.scrollY > 200) {
        headerRef.current.style.backgroundColor = '#262626'
        headerRef.current.style.height = '100px'
      } else {
        headerRef.current.style.backgroundColor = 'transparent'

        if (window.innerWidth > 1100) {
          headerRef.current.style.height = '120px'
        }
      }
    }
  })

  // remove active class on header onclick
  const handleLinkClick = () => {
    setIsHeaderActive(false)
  }

  return (
    <header
      className={isHeaderActive ? 'header active' : 'header'}
      ref={headerRef}
    >
      <div className="container--lg">
        <a href="" className="header__logo">
          <img src="/images/logo.png" alt="" />
        </a>

        <div className="header__menu" onClick={handleHeaderToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className="header__links">
          <ul>
            <li>
              <Link
                to="home"
                spy={true}
                offset={-100}
                duration={500}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                offset={-100}
                duration={500}
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                offset={-100}
                duration={500}
                onClick={handleLinkClick}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                offset={-100}
                duration={500}
                onClick={handleLinkClick}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="timeline"
                spy={true}
                offset={-100}
                duration={500}
                onClick={handleLinkClick}
              >
                Timeline
              </Link>
            </li>
            <li>
              <Link
                to="services"
                spy={true}
                offset={-100}
                duration={500}
                onClick={handleLinkClick}
              >
                Services
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
