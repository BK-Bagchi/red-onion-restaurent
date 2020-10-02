import React, { useState } from 'react';
import Confirm from '../Confirm/Confirm';
import ItemDetail from '../ItemDetail/ItemDetail';
import Menu from '../Menu/Menu';
import SignIn from '../Sign/Signin';
import Signup from '../Sign/Signup';
import Final from '../Final/Final';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from '../PrivateRoute/PrivateRoute';
export const GlobalData = React.createContext();
const Main = () => {
    const [loginInfo, setLoginInfo] = useState({})
    console.log(loginInfo);
    return (
        <>
            <GlobalData.Provider value={{ login: [loginInfo, setLoginInfo] }}>
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