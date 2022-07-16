import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container--lg">
        <a href="#" className="header__logo">
          <img src="/images/logo.png" alt="" />
        </a>

        <nav className="header__links">
          <ul>
            <li>
              <a className="active" href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Timeline</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
