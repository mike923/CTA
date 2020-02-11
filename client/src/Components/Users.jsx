import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        (async () => {
            try {
                let { data: { payload } } = await axios.get('/users')
                setUsers(payload)
            } catch (err) {
                console.log('ERROR', err)
            }
        })()
    }, [])

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map(({username, id, avatar_url}, i) => {
                    console.log(username, i)
                    return (
                        <li className="user-item" key={i}>
                            <Link to={`/users/${id}`}>
                                <img src={avatar_url} alt={username} height="40px" />
                                <p>{username}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default Users;
