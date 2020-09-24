import React from 'react';
import './Header.css';
import NavBar from './NavBar';

const Header = () => {
    return (
        <>
            <NavBar />
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