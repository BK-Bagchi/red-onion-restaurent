import React from 'react';
import About from '../About/About';
import ChooseUs from '../ChooseUs/ChooseUs';
import Confirm from '../Confirm/Confirm';
import Header from '../Header/Header';
import ItemDetail from '../ItemDetail/ItemDetail';
import Menu from '../Menu/Menu';
import SignIn from '../Sign/Signin';
import Signup from '../Sign/Signup';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const GlobalData = React.createContext();
const Main = () => {
    return (
        <>
            <GlobalData.Provider value={''}>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Header />
                            <Menu />
                            <ChooseUs />
                            <About />
                        </Route>
                        <Route path="/item/:id">
                            <Header />
                            <ItemDetail />
                            <ChooseUs />
                            <About />
                        </Route>
                        <Route path="/logIn">
                            <SignIn />
                        </Route>
                        <Route path="/signUp">
                            <Signup />
                        </Route>
                        <Route path="/cart">
                            <Confirm />
                        </Route>
                    </Switch>
                </Router>
            </GlobalData.Provider>
        </>
    );
};

export default Main;