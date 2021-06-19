import React from 'react'
import Images from './Images/index'
import './App.css'

function About() {
    return (
        <div id="about">
            <section className="about-me" id="About">
                <h2 className="section__title section__title-about">About Me</h2>
                <p className="section__subtitle section__subtitle-about">Learner</p>

                <div className="about-me__body">
                    <p>I live in delhi.I am a tech enthusiast and competitive coder pursuing Electronic and Communication at NSUT, Delhi.</p>
                    <p>Technology Excites me and I am always in aew of the change it drives in the world. Certain Skills that I have include Data Structure and Algorithm (JAVA),
                        FrontEnd Development(HTML5, CSS3, JAVASCRIPT, REACT-JS). And what I might lack in skills I make up for with my determination to learn.

                        I am intern at FirstAIL as web developer and Campus Ambassordor.I am open for work ,check out some of my work, and feel free to shoot mw an email if you'd like to work together. Thank You.
                    </p>

                </div>

                <img className="about-me__img" src={Images.who} alt="rv2" />
            </section>
        </div>
    )
}

export default About
