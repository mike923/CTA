import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Profile } from '../Components'

const ProfileConatiner = (props) => {
    const [user, setUser] = useState({})
    const [shows, setShows] = useState([])

    useEffect(() => {
        (async (id) => {
            try {
                let { data } = await axios.get(`/users/${id}`)
                console.log(data)
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
        })(props.match.params.id)
    }, [props.match.params.id])

    return (
        <Profile {...user} shows={shows} />
    )
}

export default ProfileConatiner