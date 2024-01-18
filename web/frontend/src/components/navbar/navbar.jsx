import React from 'react'
import './navbar.scss'
import logo from '../../assets/logo'
import icons from '../../assets/icons'
import Divider from '../Divider'

function SocialMedia() {
    return (
        <div className='icon-glyph'>
            <a href='https://www.facebook.com/'>
                <img src={logo.facebook} alt='' />
            </a>
            <a href='http://' target='_blank'>
                <img src={logo.twitter} alt='' />
            </a>
            <a href='http://' target='_blank'>
                <img src={logo.youtube} alt='' />
            </a>
            <a href='http://' target='_blank'>
                <img src={logo.instagram} alt='' />
            </a>
        </div>
    )
}

function Tools() {
    return (
        <tr className='tools-support'>
            <a href=''>
                <p className='h7 medium'>Order tracking</p>
            </a>
            <a href=''>
                <p className='h7 medium'>Help</p>
            </a>
            <img className='image-language' src={logo.US} alt='' />
            <p>English(US)</p>
            <img src={icons.Chevron_down} alt='' />
        </tr>
    )
}

const Navbar = () => {
    return (
        <div className=' navbar '>
            <div className='navbar-top max-width'>
                <SocialMedia />
                <Tools />
            </div>
            <Divider/>
            
        </div>
    )
}



export default Navbar
