import React from 'react'

const Profile = ({username, avatar_url}) => (
    <div>
        <h2>This is a user profile page</h2>
        <h2>{username}</h2>
        <img src={avatar_url} alt={username}/>
        <h3>Watching:</h3>
    </div>
)

export default Profile