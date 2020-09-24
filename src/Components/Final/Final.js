import React from 'react';
import './Final.css'
import NavBar from '../Header/NavBar';
import Image1 from '../../Resources/Image/Group 1151.png'
import Image2 from '../../Resources/Image/Group 1152.png'

const Final = () => {
    return (
        <>
            <NavBar />
            <section className="final-segment container">
                <div className="row py-4">
                    <div className="col-md-8 map-holder">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58144.530480832516!2d88.57091058724308!3d24.38015000649364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefa96a38d031%3A0x10f93a950ed6f410!2sRajshahi!5e0!3m2!1sen!2sbd!4v1600960927763!5m2!1sen!2sbd" width="100%" height="100%" frameBorder="0" style={{ border: 0, borderRadius: '10px' }} allowFullScreen="" aria-hidden="false" tabIndex="0" title="Current Location"></iframe>
                    </div>
                    <div className="col-md-4 detail pb-3">
                        <img className="image1 align-self-start" src={Image1} alt="Image1" />
                        <div className="description">
                            <div>
                                <h5>Your Location</h5>
                                <p>107 Rd No 8</p>
                            </div>
                            <div>
                                <h5>Shop Address</h5>
                                <p>Gulistan Plaza</p>
                            </div>
                        </div>
                        <div className="pick-time align-self-start ml-2">
                            <h3>00:00</h3>
                            <p>Estimated Delivery Time</p>
                        </div>
                        <div className="rider row">
                            <div className="col-4">
                                <img className="w-100" src={Image2} alt="Image2" />
                            </div>
                            <div className="col-8">
                                <h5>Name</h5>
                                <p>Your Rider</p>
                            </div>
                        </div>
                        <button className="contact">Contact</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Final;