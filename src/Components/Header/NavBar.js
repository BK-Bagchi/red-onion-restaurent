import React from 'react';
import './Header.css';
import Logo from '../../Resources/logo2.png'
import { useHistory } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
const NavBar = () => {
    const items = localStorage.getItem('cartTotalItems')
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
                        <MenuItem className="nav-item active" onClick={() => history.push("/cart")}>
                            <IconButton aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={items} color="secondary">
                                    <ShoppingCartIcon style={{ color: 'black' }} />
                                </Badge>
                            </IconButton>
                        </MenuItem>
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