import React from 'react';
import Confirm from '../Confirm/Confirm';
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
                    </Switch>
                </Router>
            </GlobalData.Provider>
        </>
    );
};

export default Main;