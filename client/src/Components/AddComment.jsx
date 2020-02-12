import React, { useState } from 'react'

const AddComment = ({username, avatar_url, addComment}) => {
    const [comment, setComment] = useState('')
    const submit = (event) => {
        event.preventDefault()
        addComment(comment)
        setComment('')
    }

    return (
        <form onSubmit={submit}>
            <img src={avatar_url} alt={username} height="40px"/>
            <h3>{username}</h3>
            <input 
                type="text" 
                name="comment" 
                value={comment} 
                onChange={({target:{value}}) => setComment(value)}
            />
        </form>
    )
}

export default AddComment