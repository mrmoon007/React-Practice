import React from 'react'

export default function Nav() {
  return (
    <>
      <header>
        <div>
            <img className='img' src="images.jpg" alt="logo" />
        </div>
        <nav>
            <ul>
                <li><a href="http://">Home</a></li>
                <li><a href="http://">About</a></li>
                <li><a href="http://">Contact us</a></li>
                <li><a href="http://">FAQ</a></li>
                <li><a href="http://">Sign Up</a></li>
            </ul>
        </nav>
      </header>
    </>
  )
}
