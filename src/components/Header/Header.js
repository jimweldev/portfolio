import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container--lg">
        <a href="" className="header__logo">
          <img src="/images/logo.png" alt="" />
        </a>

        <div className="header__menu">
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
