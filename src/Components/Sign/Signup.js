import React, { useState } from 'react';
import './Sing.css';
import Logo from '../../Resources/logo2.png';
import { useHistory } from 'react-router-dom';
import Firebase from './Firebase';

let tempPassword = ''
const Signup = () => {
    const history = useHistory();
    const [signUpInfo, setSignUpInfo] = useState({
        isLoggedIn: false,
        userName: '',
        email: '',
        password: ''
    })
    const [errorMessage, setErrorMessage] = useState({
        name: '',
        email: '',
        password: '',
        tempPassword: ''
    });
    const crossCheck = (infoKey, infoValue, errorKey, errorValue) => {
        setSignUpInfo({ ...signUpInfo, [infoKey]: infoValue })
        setErrorMessage({ ...errorMessage, [errorKey]: errorValue })
    }
    const signUpFormInputFiled = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (name === 'userName') {
            (value.length >= 3 && /[a-zA-Z]{3,}/.test(value)) ?
                crossCheck('userName', value, 'name', '') :
                crossCheck('userName', '', 'name', 'Enter your valid name')
        }
        else if (name === "email") {
            (/\S+@\S+\.\S+/.test(value)) ?
                crossCheck('email', value, 'email', '') :
                crossCheck('email', '', 'email', 'Enter a valid email')
        }
        else if (name === "password") {
            if (value.length >= 8 && /[a-zA-Z]{3,}/.test(value)) {
                setErrorMessage({ ...errorMessage, password: '' })
                tempPassword = value
            }
            else {
                setErrorMessage({ ...errorMessage, password: 'Use minimum 3 letters and total 8 digits or more' })
                tempPassword = ''
            }
        }
        else if (name === "confirmPassword") {
            (value === tempPassword) ?
                crossCheck('password', value, 'tempPassword', '') :
                crossCheck('password', '', 'tempPassword', 'Enter same password in 2 fields')
        }
    }
    const signUp = (e) => {
        e.preventDefault()
        const { userName, email, password } = signUpInfo
        if (userName && email && password) {
            setSignUpInfo({ ...signUpInfo, isLoggedIn: true })
        }
    }
    console.log(signUpInfo);
    return (
        <>
            <section className="sign d-flex flex-column align-items-center">
                <div className="head" onClick={() => history.push("/")}>
                    <img className="logo" src={Logo} alt="Logo" />
                </div>
                <div className="form" onSubmit={signUp}>
                    <form className="d-flex flex-column align-items-center">
                        <input name="userName" type="text" placeholder="Enter name" onBlur={signUpFormInputFiled} />
                        <span className="error">{errorMessage.name}</span>

                        <input name="email" type="email" placeholder="Enter email" onBlur={signUpFormInputFiled} />
                        <span className="error">{errorMessage.email}</span>

                        <input name="password" type="password" placeholder="Enter password" onBlur={signUpFormInputFiled} />
                        <span className="error">{errorMessage.password}</span>

                        <input name="confirmPassword" type="password" placeholder="Confirm password" onBlur={signUpFormInputFiled} />
                        <span className="error">{errorMessage.tempPassword}</span>

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