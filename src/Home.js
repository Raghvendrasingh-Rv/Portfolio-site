import React from 'react'
import Images from './Images/index'
import './App.css'

function Home() {
    return (
        <div id="home">
            <section className="intro" id="Home">
                <h1 className="section__title section__title-intro">
                    Hi, I am <strong>Raghvendra singh sengar</strong>
                </h1>
                <p className="section__subtitle section__subtitle-intro">Student of B.Tech(ECE) and Frontend-Dev</p>
                <img className="intro__img" src={Images.intro} alt="rv" />
            </section>

            <div className="welcome">WELCOME</div>

            
        </div>
    )
}

export default Home
