import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'

import { SET_LOADING, SET_USER, LOGOUT } from './store/actions/actionTypes'
import { Navbar, Home, PrivateRoute, About } from './Components'
import { AuthContainer, AddShowContainer, AllShowsContainer, ProfileContainer, UsersContainer, UserShowContainer } from './Containers';

const App = (props) => {
    const { setUser, setLoading, logout, isUserLoggedIn } = props

    useEffect(() => {
        checkUserLoggedIn()
    }, [isUserLoggedIn])

    const checkUserLoggedIn = async () => {
        console.log('Checking if user logged in')
        try {
            const { data } = await axios.get("/auth/isUserLoggedIn")
            setUser(data.payload)
        } catch (err) {
            // User does not have an active session in the backend. User is logged out so set loadingUser to false.
            if (err.message.includes(401)) {
                setLoading()
            }
        }
    }

    const logoutUser = async () => {
        console.log('logging out user')
        try {
            await axios.get('/auth/logout')
            logout()
            props.history.push('/') // Redirect user to / (home)
        } catch (err) {
            console.log('ERROR', err)
        }
    }

    // if (loadingUser) { // If checking if user is authenticated has not completed display a loading animation otherwise render the app
    //     return <div>loading...</div>
    // }

    return (
        <div className="App">
            <Navbar
                logoutUser={logoutUser}
                isUserLoggedIn={isUserLoggedIn}
            />
            <Switch>
                <Route path="/login" component={AuthContainer} />
                <Route path="/signup" component={AuthContainer} />
                <Route path="/about" component={About} />
                <PrivateRoute path="/shows/:id/user/:userId" component={UserShowContainer} />
                <PrivateRoute path="/shows" component={AllShowsContainer} />
                <PrivateRoute path="/users/:id/addShow" component={AddShowContainer} />
                <PrivateRoute path="/users/:id" component={ProfileContainer} />
                <PrivateRoute path="/users" component={UsersContainer} />
                <PrivateRoute path="/profile" render={() => <h1> Profile </h1>} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    );
}

const mapStateToProps = ({ authReducer }) => {
    return { ...authReducer }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user) => {
            dispatch({
                type: SET_USER,
                payload: user,
            })
        },
        setLoading: () => {
            dispatch({
                type: SET_LOADING,
            })
        },
        logout: () => {
            dispatch({
                type: LOGOUT,
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
