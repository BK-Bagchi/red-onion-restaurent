import React from 'react';
import './Header.css';
import Logo from '../../Resources/logo2.png'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    return (
        <>
            <section className="top-nav">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="logo-holder">
                        <img className="logo" src={Logo} alt="Logo" />
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/cart"><ShoppingCartIcon /></Link>
                            </li>
                            <li className="nav-item active">
                                <button className="login" onClick={() => history.push("/logIn")}>Login</button>
                            </li>
                            <li className="nav-item active">
                                <button className="sign-up" onClick={() => history.push("/signUp")}>Sign Up</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
            <section className="search-bar d-flex flex-column align-items-center justify-content-center">
                <h1 className="text-center">Best food waiting for your belly</h1>
                <form className="search-engine d-flex justify-content-between my-3">
                    <input className="search-field py-1" type="text" placeholder="Enter your food name" />
                    <button className="search">Search</button>
                </form>
            </section>
        </>
    );
};

export default Header;