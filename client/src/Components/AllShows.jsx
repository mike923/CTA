import React from 'react'
import { Link } from 'react-router-dom'

const AllShows = ({shows}) => (
    <ul>
        {shows.map(({title, genre_name, img_url, viewers}, i) => (
            <li key={i}>
                <img src={img_url} alt={title} height="200px"/>
                <h3>{title}</h3>
                <h4>{genre_name}</h4>
                Being watched by: 
                <ol>
                    {viewers.map(({username, user_id}, i) => (
                        <li key={i}><Link to={`/users/${user_id}`}>{username}</Link></li>
                    ))}
                </ol>
            </li>
        ))}
    </ul>
)

export default AllShows