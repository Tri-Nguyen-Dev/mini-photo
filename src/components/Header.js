import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Header.scss'

function Header() {
    return (
        <header className="header">
            <a href="https://www.facebook.com/thien.tri.5477/"
                className="header__logo"
                target="_logo"
                rel="noopener noreferrer"
            >
                Mini Photo
            </a>
            <NavLink exact activeClassName="header__link--active" className="header__link" to="/">Home</NavLink>
        </header>
    )
}

export default Header
