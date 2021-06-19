import React from 'react'

import './App.css'

function Services() {
    return (
        <div id="work">
            <section className="my-services" id="Services">
                <h2 className="section__title section__title-services">Activity</h2>
                <div className="services">

                    <div className="service">
                        <h3>Ds & Algo(JAVA)</h3>
                        <p>For the competitive coding I usually prefer to go with java.</p>
                    </div>

                    <div className="service">
                        <h3>Front end dev</h3>
                        <p>For Development I know about HTML5, CSS3, JavaScript, React-Js. And by the way this site also uses all four concepts.</p>
                    </div>

                    <div className="service">
                        <h3>Others</h3>
                        <div><ul style={{ listStyleType: "none" }}><li>Campus Ambassordor</li><li>NEO 3.0 AIR-130</li><li>Health conscious</li><li>Member of IOSD</li></ul></div>
                    </div>

                </div>

                <a href="#Work" className="btn">Projects</a>
            </section>
        </div>
    )
}

export default Services
