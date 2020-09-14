import React from 'react';
import About from '../About/About';
import ChooseUs from '../ChooseUs/ChooseUs';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

const Main = () => {
    return (
        <>
            <Header />
            <Menu />
            <ChooseUs />
            <About />
        </>
    );
};

export default Main;