import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({isUserLoggedIn, component, ...props}) => {
    if (isUserLoggedIn) {
        return <Route {...props} component={component} />
    }
    return <Redirect to="/login" />
}

export default PrivateRoute;
