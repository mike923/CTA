import React from 'react'

const Profile = (props) => {
    const { username, avatar_url, shows } = props
    console.log(username, shows, props)
    // const username = 'Mikey mike'
    // const avatar_url = 'https://athletics.baruch.cuny.edu/images/2015/9/22/MichaelDAmparo2015.jpg?width=300'
    // const shows = [
    //     {title: 'Game of Thrones', img_url: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg', genre_id: 4,},
    //     {title: 'Game of Thrones', img_url: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg', genre_id: 4,},
    //     {title: 'The Flash', img_url: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg', genre_id: 1,},
    //     {title: 'The Flash', img_url: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg', genre_id: 1,},
    //     {title: 'The Flash', img_url: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg', genre_id: 1,}
    // ]

    // console.log(props)
    return (
        <div>
            <h2>This is a user profile page</h2>
            <h2>{username}</h2>
            <img src={avatar_url} alt={username}/>
            <h3>Watching</h3>
            <ul>
                {shows.map(({title, img_url, genre}, i) => {
                    return (
                        <li key={i}>
                            <img src={img_url} alt=""/>
                            <h3>{title}</h3>
                            <h4>{genre}</h4>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default Profile