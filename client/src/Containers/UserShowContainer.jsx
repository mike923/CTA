import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import { UserShow, Comments, AddComment } from '../Components'

const UserShowContainer = ({match: {params}, user}) => {
    const show_id = params.id
    const [comments, setComments] = useState([])
    const [show, setShow] = useState({})

    useEffect(() => {
        loadShow()
        loadComments()
    }, [])

    const loadShow = async () => {
        try {
            let { data } = await axios.get(`/shows/${show_id}`)
            setShow(data.payload)
        } catch (error) {
            console.log('error', error)
        }
    }

    const loadComments = async () => {
        try {
            let { data } = await axios.get(`/comments/show/${show_id}`)
            setComments(data.payload)
        } catch (error) {
            console.log('error', error)
        }
    }

    const addComment = async (comment) => {
        const formData = {
            comment_body: comment,
            user_id: user.id,
            show_id,
        }
        try {
            const { data: {payload} } = await axios.post('/comments', formData)
            formData.avatar_url = user.avatar_url
            formData.username = user.username
            const newComments = [...comments]
            newComments.push(formData)
            setComments(newComments)
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <div>
            <UserShow {...show} />
            <AddComment {...user} addComment={addComment} />
            <Comments comments={comments} />
        </div>
    )
}

const mapStateToProps = ({authReducer}) => {
    return {...authReducer}
}

export default connect(mapStateToProps)(UserShowContainer)