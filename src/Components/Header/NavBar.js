import React from 'react';
import './Header.css';
import Logo from '../../Resources/logo2.png'
import { Link, useHistory } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const NavBar = () => {
    const history = useHistory();
    return (
        <section className="top-nav">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="logo-holder" onClick={() => history.push("/")}>
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
    );
};

export default NavBar;