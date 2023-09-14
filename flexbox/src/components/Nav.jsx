import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <header>
        <div>
            <img className='img' src="images.jpg" alt="logo" />
        </div>
        <nav>
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact us</NavLink></li>
                <li><NavLink to="/faq">FAQ</NavLink></li>
                <li><NavLink to="/sign-up">Sign Up</NavLink></li>
            </ul>
        </nav>
      </header>
    </>
  )
}
