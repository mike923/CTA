import React from 'react'
import { Link } from 'react-router-dom'

const AllShows = ({shows}) => (
    <div className="container row">
        {shows.map(({title, genre_name, img_url, show_id, viewers}, i) => (
            <div className="col s4 m4" key={i} style={{overflow: 'auto'}}>
                <h2 className="header">{title}</h2>
                <div className="card ">
                    <div className="card-image">
                        <img src={img_url} alt={title} />
                    </div>
                    <div className="card-content" style={{overflow: 'auto'}}>
                        <h4>{genre_name}</h4>
                        <ul>
                            <li key={0}><h5>Being watched by</h5></li>
                            {viewers.map(({username, user_id}, i) => (
                                <li key={i}><Link to={`/shows/${show_id}/user/${user_id}`}>{username}</Link></li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        ))}
    </div>
)

export default AllShows