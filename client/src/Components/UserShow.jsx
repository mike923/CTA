import React from 'react'
import { Link } from 'react-router-dom'

const UserShow = ({title, img_url, genre_name, comments}) => (
    <div>
        <h2>{title}</h2>
        <img src={img_url} alt={title} />
        <h4>{genre_name}</h4>
        <div>
            <form action=""></form>
            <ul>
                {comments.map(({username, comment_body, user_id, avatar_url}, i) => (
                    <li key={i}>
                        <Link to={`/users/${user_id}`}>
                            <img src={avatar_url} alt={username} height="40px" />
                            <h4>{username}</h4>
                        </Link>
                        <p>{comment_body}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
)

export default UserShow