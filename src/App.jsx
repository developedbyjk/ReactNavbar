import { useState } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faXmark } from "@fortawesome/free-solid-svg-icons";

import './App.css'

function App() {
  //state to show hide navbar
  const [showNavbar, setShowNavbar] = useState(false)

  //changin the state 
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <>
     <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h1>🔥</h1>
        </div>
        {/* menubar out of the navbar remember */}
        <div className="menu-icon" onClick={handleShowNavbar}>
        <FontAwesomeIcon icon={showNavbar ? faXmark  : faBars} />
        </div>

        {/* menu bar click change the state that reflect it here */}
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
     
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default App
