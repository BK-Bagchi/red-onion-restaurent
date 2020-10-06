import React, { useState } from 'react';
import Confirm from '../Confirm/Confirm';
import ItemDetail from '../ItemDetail/ItemDetail';
import Menu from '../Menu/Menu';
import SignIn from '../Sign/Signin';
import Signup from '../Sign/Signup';
import Final from '../Final/Final';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from '../PrivateRoute/PrivateRoute';

if (!JSON.parse(localStorage.getItem('loginInfo')))
    localStorage.setItem('loginInfo', JSON.stringify({}))

if (!JSON.parse(localStorage.getItem('cart')))
    localStorage.setItem('cart', JSON.stringify([]))

export const GlobalData = React.createContext();
const Main = () => {
    const [orderInfo, setOrderInfo] = useState({})
    const [loginInfo, setLoginInfo] = useState({})
    if (loginInfo.isLoggedIn)
        localStorage.setItem('loginInfo', JSON.stringify(loginInfo))


    return (
        <>
            <GlobalData.Provider value={{ login: [loginInfo, setLoginInfo], order: [orderInfo, setOrderInfo] }}>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Menu />
                        </Route>
                        <Route path="/item/:id">
                            <ItemDetail />
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
                        <PrivateRoute path="/finished">
                            <Final />
                        </PrivateRoute>
                    </Switch>
                </Router>
            </GlobalData.Provider>
        </>
    );
};

export default Main;