import React from 'react';
import './Sing.css';
import Logo from '../../Resources/logo2.png';
import { useHistory } from 'react-router-dom';
import Firebase from './Firebase';

const Signin = () => {
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
                        <input type="email" placeholder="Enter email" />
                        <input type="password" placeholder="Enter password" />
                        <input type="submit" value="Sign In" />
                    </form>
                </div>
                <span onClick={() => history.push("/signUp")}>Don't have an account?</span>
            </section>
            <Firebase />
        </>
    );
};

export default Signin;