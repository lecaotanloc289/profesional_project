import React from 'react'
import './CircleIcon.scss'
const CircleIcon = ({link}) => {
    return (
        <div className='circle-icon'>
            <a href=''>
                <img src={link} alt='' />
            </a>
        </div>
    )
}

export default CircleIcon
