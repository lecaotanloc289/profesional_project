import React from 'react'
import './navbar.css'
import logo from '../../assets/logo'
import icons from '../../assets/icons'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className='icon-glyph'>
          <img src={logo.facebook} alt="" />
          <img src={logo.twitter} alt="" />
          <img src={logo.youtube} alt="" />
          <img src={logo.instagram} alt="" />
        </div>
        <div>
          <p>Order tracking</p>
          <p>Help</p>
          <div>
            <img src={logo.US} alt="" />
            <p>English(US)</p>
            <img src={icons.Chevron_down} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
