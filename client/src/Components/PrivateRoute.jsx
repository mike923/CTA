import React from 'react'
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({isUserLoggedIn, component, ...props}) => {
    console.log({...props})
    console.log(props.params)
    if (isUserLoggedIn) {
        return <Route {...props} component={component} />
    }
    return <Redirect to="/login" />
}

const mapStateToProps = ({ authReducer }) => {
    return { ...authReducer }
}

export default connect(mapStateToProps)(PrivateRoute);
