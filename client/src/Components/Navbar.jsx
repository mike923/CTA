import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ logoutUser, isUserLoggedIn }) => {
    return (
        isUserLoggedIn
        ? (
            <nav>
                <Link to="/">Home</Link>{" "}
                <Link to="/about">About</Link>{" "}
                <Link to="/shows">Shows</Link>{" "}
                <Link to="/users">Users</Link>{" "}
                <Link to="/profile">Profile</Link>{" "}
                <button onClick={logoutUser}>Log-out</button>
            </nav>
        ) : (
            <nav>
                <Link to="/">Home</Link>{" "}
                <Link to="/about">About</Link>{" "}
                <Link to="/shows">Shows</Link>{" "}
                <Link to="/login">Log-In</Link>{" "}
                <Link to="/signup">Sign-Up</Link>{" "}
            </nav>
        )
    )
}

export default Navbar;

