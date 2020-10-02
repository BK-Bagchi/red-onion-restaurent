import React, { useContext, useState } from 'react';
import './Sing.css';
import Logo from '../../Resources/logo2.png';
import { useHistory, useLocation } from 'react-router-dom';
import Firebase from './Firebase';
import NavBar from '../Header/NavBar';
import * as firebase from "firebase/app"
import "firebase/auth"
import { GlobalData } from '../Main/Main';

const Signin = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [loginInfo, setLoginInfo] = useContext(GlobalData).login
    const [errorMessage, setErrorMessage] = useState({
        email: '',
        password: '',
    })

    const crossCheck = (key, value, error) => {
        setLoginInfo({ ...loginInfo, [key]: value })
        setErrorMessage({ ...errorMessage, [key]: error })
    }

    const signInFormInputFiled = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (name === 'email') {
            (/\S+@\S+\.\S+/.test(value)) ?
                crossCheck('email', value, '') :
                crossCheck('email', '', 'Enter a valid email')

        }
        else if (name === 'password') {
            (value.length >= 8 && /[a-zA-Z]{3,}/.test(value)) ?
                crossCheck('password', value, '') :
                crossCheck('password', '', 'Use minimum 3 letters and total 8 digits or more')

        }
    }

    const logIn = (e) => {
        e.preventDefault()
        const { email, password } = loginInfo
        if (email && password) {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    setLoginInfo({ ...loginInfo, isLoggedIn: true })
                    history.replace(from);
                })
                .catch(error => {
                    const { code, message, email, credential } = error
                    console.log(code, "| |", message, "| |", email, "| |", credential)
                    crossCheck('password', '', message)
                });
        }
    }

    return (
        <>
            <NavBar />
            <section className="sign d-flex flex-column align-items-center">
                <div className="head" onClick={() => history.push("/")}>
                    <img className="logo" src={Logo} alt="Logo" />
                </div>
                <div className="form">
                    <form className="d-flex flex-column align-items-center">
                        <input name="email" type="email" placeholder="Enter email" onBlur={signInFormInputFiled} />
                        <span className="error">{errorMessage.email}</span>

                        <input name="password" type="password" placeholder="Enter password" onBlur={signInFormInputFiled} />
                        <span className="error">{errorMessage.password}</span>

                        <input type="submit" value="Sign In" onClick={logIn} />
                    </form>
                </div>
                <span onClick={() => history.push("/signUp")}>Don't have an account?</span>
            </section>
            <Firebase />
        </>
    );
};

export default Signin;