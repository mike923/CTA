import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Profile, AllUserShows } from '../Components'

const ProfileConatiner = ({match: {params: {id}}}) => {
    const [user, setUser] = useState({})
    const [shows, setShows] = useState([])

    useEffect(() => {
        (async (id) => {
            try {
                let { data } = await axios.get(`/users/${id}`)
                setUser(data.payload)
            } catch (error) {
                console.log('error', error)
            }
            try {
                let { data } = await axios.get(`/shows/user/${id}`)
                setShows(data.payload)
            } catch (error) {
                console.log('error', error)
            }
        })(id)
    }, [id])

    return (
        <div>
            <Profile {...user} />
            <AllUserShows shows={shows} user_id={id} />
        </div>
    )
}

export default ProfileConatiner