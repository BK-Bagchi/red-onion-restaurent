import React from 'react';
import About from '../About/About';
import ChooseUs from '../ChooseUs/ChooseUs';
import Header from '../Header/Header';
import ItemDetail from '../ItemDetail/ItemDetail';
import Menu from '../Menu/Menu';

const Main = () => {
    return (
        <>
            <Header />
            {/* <Menu />
            <ChooseUs />
            <About /> */}
            <ItemDetail />
        </>
    );
};

export default Main;