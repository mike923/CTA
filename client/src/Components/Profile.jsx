import React from 'react'
import { Link } from 'react-router-dom'

const Profile = ({id, username, avatar_url, showButtons}) => (
    <div>
        <h2>This is a user profile page</h2>
        <h2>{username}</h2>
        <img src={avatar_url} alt={username}/>
        {showButtons
            ?   
                <Link to={`/users/${id}/addShow`}>
                    <button className="waves-effect waves-light btn">
                        Add Show
                    </button>
                </Link>
            : ''
        }
        <h3>Watching:</h3>
    </div>
)

export default Profile