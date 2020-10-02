import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { GlobalData } from '../Main/Main';

const PrivateRoute = ({ children, ...rest }) => {
    const loginInfo = useContext(GlobalData).login[0]
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loginInfo.isLoggedIn ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/logIn",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;