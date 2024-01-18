import React from 'react'
import logo from '../../assets/logo'
import icons from '../../assets/icons'
import CircleIcon from './CircleIcon'
import './header.scss'
export default function Header() {
    return (
        <div className='header max-width'>
            <a href=''>
                <img src={logo.Elma} alt='' />
            </a>
            <form className='search' action=''>
                <input className='search-input' type='text' name='' id='' />
                <button className='search-button' type='submit'>
                    <img src={icons.Search} alt='' />
                </button>
            </form>
            <CircleIcon link={icons.Cart}/>
            <CircleIcon link={icons.Love}/>
            <CircleIcon link={icons.User}/>

            <div>
                <p>Join Elma</p>
                <p>My Account <img src={icons.Chevron_down} alt="" /></p>
            </div>

            
        </div>
    )
}
