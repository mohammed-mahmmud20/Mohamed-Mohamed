import React from 'react'
import "./About.css"

const About = () => {
    return (
        <div className='body'>
            <div className="container">
                <div className="section-title">
                    <h2>Resume</h2>
                    <p>Check My Resume</p>
                </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="resume-item pb-0">
                                <h4>Mohammed Mohammed</h4>
                                <p><em>Full Stack Developer with 5+ Years of experience of website development .</em></p>
                                <p>
                                <p>Qesm El Giza, Al Jizah, Egypt</p>
                                <p>+201021228645</p>
                                <p>mohammedmahmmud20@gmail.com</p>
                                </p>

                            <div className="col-lg-6">
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item">
                                <h4>Full Stack Developer</h4>
                                <h5>2021 - Present</h5>
                                <p><em>mag camp </em></p>
                                <p>
                                <p>Language: JavaScript, PHP</p>
                                <p>Database: mySQL</p>
                                <p>Tec: ReactJs, BootStrap, Laravel</p>
                                </p>
                            </div>
                            <div className="resume-item">
                                <h4> Full Stack Developer</h4>
                                <p>
                                <p>Programming Content Creator</p>
                                <p>Social Media like, Instagram, Tiktok, Facebook</p>
                                <p>Create Videos on my Youtube Channel</p>
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About