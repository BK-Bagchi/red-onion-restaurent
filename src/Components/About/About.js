import React from 'react';
import './About.css'
import Logo from '../../Resources/logo.png'

const About = () => {
    return (
        <section className="about">
            <div className="upper-about">
                <div className="row">
                    <div className="col-md-6 image-holder mb-3">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="col-md-6 d-flex justify-content-between">
                        <div>
                            <ul>
                                <li>About Online food</li>
                                <li>Read out blog</li>
                                <li>Sign up to deliver</li>
                                <li>Add your restaurant</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Get help</li>
                                <li>Read FAQs</li>
                                <li>View all cities</li>
                                <li>Restaurant near me</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-about">
                <div className="row">
                    <div className="col-md-7 d-flex justify-content-between">
                        <span>Copyright © 2020 Online Food</span>
                    </div>
                    <div className="col-md-5 d-flex justify-content-between">
                        <div className="others">
                            <p>Privacy Policy</p>
                            <p>Terms of Use</p>
                            <p>Pricing</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;