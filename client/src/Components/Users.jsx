import React, { useState, useEffect } from "react";
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([])
    
    useEffect(async () => {
        try {
            let { data: { payload } } = await axios.get('/users')
            setUsers(payload)
        } catch (err) {
            console.log('ERROR', err)
        }
    }, [])

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map((user, i) => {
                    return (
                        <li className="user-item" key={i}>
                            <p>id:{user.id} user:{user.username}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default Users;
