import React from 'react'

const UserShow = ({title, img_url, genre_name, comments}) => (
    <div>
        <h2>{title}</h2>
        <img src={img_url} alt={title} />
        <h4>{genre_name}</h4>
    </div>
)

export default UserShow