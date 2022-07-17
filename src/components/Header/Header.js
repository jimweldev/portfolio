import React, { useState, useRef } from 'react'
import './Header.css'

const Header = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false)
  const headerRef = useRef(null)

  const handleHeaderToggle = () => {
    setIsHeaderActive(!isHeaderActive)

    if (isHeaderActive) {
      document.body.style.overflowY = 'scroll'
    } else {
      document.body.style.overflowY = 'hidden'
    }
  }

  window.addEventListener('resize', () => {
    setIsHeaderActive(false)

    if (window.innerWidth > 1100) {
      headerRef.current.style.height = '120px'
    } else {
      headerRef.current.style.height = '100px'
    }
  })

  window.addEventListener('scroll', () => {
    if (headerRef && headerRef.current) {
      if (window.scrollY > 120) {
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
              <a className="active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#timeline">Timeline</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
