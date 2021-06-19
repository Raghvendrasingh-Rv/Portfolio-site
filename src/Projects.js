import React from 'react'
import Images from './Images/index'
import './App.css'

function Projects() {
    return (
        <div id="project">
            <section className="my-work" id="Work">
                <h2 className="section__title section__title--work">Projects</h2>
                <p className="section__subtitle section__subtitle--work">Ralated to web development</p>

                <div className="portfolio">
                    <a href="https://github.com/Raghvendrasingh-Rv/Netflix-clone" className="porfolio__item">
                        <img src={Images.netflix} className="portfolio__img" alt="a" />
                    </a>

                    <a href="https://github.com/Raghvendrasingh-Rv/FirstAIL-ExamWebsiteProject" className="porfolio__item">
                        <img src={Images.firstail} className="portfolio__img" alt="t" />
                    </a>

                    <a href="https://github.com/Raghvendrasingh-Rv/Budget-app" className="porfolio__item">
                        <img src={Images.budget} className="portfolio__img" alt="d" />
                    </a>

                    <a href="/" className="porfolio__item">
                        <img src={Images.covid} className="portfolio__img" alt="c" />
                    </a>

                </div>
                <div><p style={{ fontSize: "7px" }}>*Click on the images to get the info about respective project.</p></div>
            </section>
        </div>
    )
}

export default Projects
