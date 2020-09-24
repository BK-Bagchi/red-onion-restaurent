import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { GlobalData } from '../Main/Main';

const PrivateRoute = ({ children, ...rest }) => {
    const aboutLogin = useContext(GlobalData)
    const [loginInfo, setLoginInfo] = aboutLogin.login
    console.log(aboutLogin)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loginInfo.isLogedIn ? (
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