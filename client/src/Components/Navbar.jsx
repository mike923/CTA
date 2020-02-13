import React from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'

const Navbar = ({ logoutUser, isUserLoggedIn, user_id }) => {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        let options = {
            inDuration: 300,
            outDuration: 300,
            hover: true, // Activate on hover
            coverTrigger: false, // Displays dropdown below the button
        };
        var instances = M.Sidenav.init(elems, options);
    });
    return (<>
        <nav>
            <div className='nav-wrapper'>
                {isUserLoggedIn
                    ? (<>
                        <Link className="brand-logo" to="/">Home</Link>
                        <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/shows">Shows</Link></li>
                            <li><Link to={`/users/${user_id}/addShow`}>Add Show</Link></li>
                            <li><Link to="/users">Users</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <button className="waves-effect waves-light btn" onClick={logoutUser}>Log-out</button>
                        </ul>
                    </>) 
                    : (<>
                        <Link className="brand-logo" to="/">Home</Link>
                        <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/shows">Shows</Link></li>
                            <li><Link to="/login">Log-In</Link></li>
                            <li><Link to="/signup">Sign-Up</Link></li>
                        </ul>
                    </>)
                }
            </div>
        </nav>
        {isUserLoggedIn
            ? (<>
                <ul className="sidenav" id="mobile-demo">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/shows">Shows</Link></li>
                    <li><Link to={`/users/${user_id}/addShow`}>Add Show</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <button className="waves-effect waves-light btn" onClick={logoutUser}>Log-out</button>
                </ul>
            </>) 
            : (<>
                <ul className="sidenav">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/shows">Shows</Link></li>
                    <li><Link to="/login">Log-In</Link></li>
                    <li><Link to="/signup">Sign-Up</Link></li>
                </ul>
            </>)
        }
    </>)
}
export default Navbar;

