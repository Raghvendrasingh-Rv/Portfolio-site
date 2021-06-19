import React, { useState } from 'react'
import './Navbar.css'
import Images from '../Images/index'



function Navbar() {
    const [isMobile, setMobile] = useState(false)

    return (
        <>
            <nav className="navbar">
                <h3 className="logo"><img src={Images.icon} alt="fdf" /></h3>
                <ul className={isMobile ? "nav_links_mobile" : "nav_links"}
                    onClick={() => setMobile(false)}
                >
                    <li className="nav_item"><a href="#home">Home</a></li>
                    <li className="nav_item"><a href="#about">About</a></li>
                    <li className="nav_item"><a href="#project">Projects</a></li>
                    <li className="nav_item"><a href="#github">Github</a></li>
                    <li className="nav_item"><a href="#work">Activity</a></li>

                </ul>
                <button className="mobile-menu-icon"
                    onClick={() => setMobile(!isMobile)}
                >
                    {isMobile ? (<i className="fas fa-times"></i>) : (<i className="fas fa-bars"></i>)}
                </button>
            </nav>
        </>
    )
}

export default Navbar
