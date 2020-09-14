import React from 'react';
import './Sing.css';
import Logo from '../../Resources/logo2.png';
const Signup = () => {
    return (
        <section className="sign d-flex flex-column align-items-center">
            <div className="head">
                <img className="logo" src={Logo} alt="Logo" />
            </div>
            <div className="form">
                <form className="d-flex flex-column align-items-center">
                    <input type="text" placeholder="Enter name" />
                    <input type="email" placeholder="Enter email" />
                    <input type="password" placeholder="Enter password" />
                    <input type="password" placeholder="Confirm password" />
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
            <span>Already have an account?</span>
        </section>
    );
};

export default Signup;