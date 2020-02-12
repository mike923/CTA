import React from 'react'

const UserShow = ({title, img_url, genre_name, comments}) => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={img_url} alt={title} />
            <h4>{genre_name}</h4>
            <div>
                <form action=""></form>
                <ul>
                    {comments.map((comment) => {
                        return (
                            <li>
                                <h4>{comment.username}</h4>
                                <p>{comment.comment_body}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default UserShow