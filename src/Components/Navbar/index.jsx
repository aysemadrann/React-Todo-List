import './style.scss';
import React from 'react';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <span className='logo'>LOGO</span>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
        </nav>
    )
}
