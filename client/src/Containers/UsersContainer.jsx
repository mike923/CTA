import React, { useState, useEffect } from "react";
import axios from 'axios';

import { Users } from '../Components'

const UsersContainer = () => {
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
        <Users users={users} />
    )
}


export default UsersContainer;
