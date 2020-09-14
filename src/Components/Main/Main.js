import React, { useState } from 'react';
import About from '../About/About';
import ChooseUs from '../ChooseUs/ChooseUs';
import Confirm from '../Confirm/Confirm';
import Header from '../Header/Header';
import ItemDetail from '../ItemDetail/ItemDetail';
import Menu from '../Menu/Menu';
import Signin from '../Sign/Signin';
import Signup from '../Sign/Signup';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const GlobalData = React.createContext();
const Main = () => {
    return (
        <>
            <GlobalData.Provider value={''}>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Menu />
                        </Route>
                        <Route path="/item/:id">
                            <ItemDetail />
                        </Route>

                        {/* <Signup />
                    <Signin /> */}
                        {/* <Confirm /> */}
                    </Switch>
                    <ChooseUs />
                    <About />
                </Router>
            </GlobalData.Provider>
        </>
    );
};

export default Main;