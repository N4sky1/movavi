import React from 'react'
import './Header.scss'
import Image from './img/logo.png'

const Header = () => {
    return (
        <div className="header">
            <img src={Image}  alt="logo icon"/>
        </div>
    )
}

export default Header