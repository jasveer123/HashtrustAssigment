//simple Navbar

import React from 'react'
import Logo from '../images/logo.png'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className="navbar_container">
        <div className="navbar_logo">
          <img className="img_logo" src={Logo} alt="image not found" />
        </div>
        {/* home menu link which redirect user to home page*/}
        <ul className="navbar_menu">
          <li className="Home_menu">
            <NavLink className="navfont" to="/Home">
              Home
            </NavLink>
          </li>
          {/*dont make pages for this one just for show menu*/}
          <li className="Home_menu">Articles</li>
          <li className="Home_menu">Discover</li>
          <li className="Home_menu">Login</li>
          <li className="Home_menu">Sign up</li>
        </ul>
      </div>
    </>
  )
}

export default NavBar
