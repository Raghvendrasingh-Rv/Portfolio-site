import React from 'react'
import './App.css'

function Footer() {
    return (
        <footer className="footer" id="foot">
        <a href="rv.singh.5330@gmail.com" className="footer__link">rv.singh.5330@gmail.com</a>
        <a href="rv.singh.5330@gmail.com" className="footer__link"><br />+91-9329080176</a>
        <ul className="social-list">
          <li className="social-list__item"><a className="social-list__link" href="https://www.linkedin.com/in/raghvendra-singh-sengar-rv-06b92a144" ><i className="fab fa-2x fa-linkedin-in"></i></a></li>
          <li className="social-list__item"><a className="social-list__link" href="https://twitter.com" ><i className="fab fa-2x fa-twitter"></i></a></li>
          <li className="social-list__item"><a className="social-list__link" href="https://github.com/Raghvendrasingh-Rv" ><i className="fab fa-2x fa-github"></i></a></li>
          <li className="social-list__item"><a className="social-list__link" href="https://instagram.com" ><i className="fab fa-2x fa-instagram"></i></a></li>
        </ul>
      </footer>
    )
}

export default Footer
