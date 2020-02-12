import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { UserShow } from '../Components'

const UserShowContainer = (props) => {
    const show_id = props.match.params.id
    const [comments, setComments] = useState([])
    const [show, setShow] = useState({})
    console.log(show_id)

    useEffect(() => {
        loadShow()
        loadComments()
    }, [])

    const loadShow = async () => {
        try {
            let { data } = await axios.get(`/shows/${show_id}`)
            console.log(data.payload)
            setShow(data.payload)
        } catch (error) {
            console.log('error', error)
        }
    }
    
    const loadComments = async () => {
        try {
            let { data } = await axios.get(`/comments/show/${show_id}`)
            console.log(data.payload)
            setComments(data.payload)
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <UserShow {...show} comments={comments} />
    )
}

export default UserShowContainer