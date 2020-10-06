import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
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