import React from 'react';
import './Sing.css';
import Logo from '../../Resources/logo2.png';
import { useHistory } from 'react-router-dom';
import Firebase from './Firebase';
const Signup = () => {
    const history = useHistory();
    return (
        <>
            <section className="sign d-flex flex-column align-items-center">
                <div className="head" onClick={() => history.push("/")}>
                    <img className="logo" src={Logo} alt="Logo" />
                </div>
                <div className="form">
                    <form className="d-flex flex-column align-items-center">
                        <input type="text" placeholder="Enter name" />
                        <span className="error"></span>

                        <input type="email" placeholder="Enter email" />
                        <span className="error"></span>

                        <input type="password" placeholder="Enter password" />
                        <span className="error"></span>

                        <input type="password" placeholder="Confirm password" />
                        <span className="error"></span>

                        <input type="submit" value="Sign Up" />
                    </form>
                </div>
                <span onClick={() => history.push("/logIn")}>Already have an account?</span>
            </section>
            <Firebase />
        </>
    );
};

export default Signup;