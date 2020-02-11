import React from 'react'
import { Link } from 'react-router-dom'

import { Shows } from '../Components'

const Profile = ({id, username, avatar_url, shows}) => {
    console.log(shows)
    return (
        <div>
            <h2>This is a user profile page</h2>
            <h2>{username}</h2>
            <img src={avatar_url} alt={username}/>
            <h3>Watching</h3>
            <Shows shows={shows} user_id={id} />
        </div>
    )
}


export default Profile