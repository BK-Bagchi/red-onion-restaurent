import React from 'react';
import About from '../About/About';
import ChooseUs from '../ChooseUs/ChooseUs';
import Header from '../Header/Header';
import ItemDetail from '../ItemDetail/ItemDetail';
import Menu from '../Menu/Menu';
import Signin from '../Sign/Signin';
import Signup from '../Sign/Signup';

const Main = () => {
    return (
        <>
            <Header />
            <Menu />
            <ChooseUs />
            <About />
            <ItemDetail />
            <Signup />
            <Signin />

        </>
    );
};

export default Main;