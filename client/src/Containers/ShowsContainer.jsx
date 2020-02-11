import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Shows } from '../Components'

const ShowsContainer = (props) => {
    const [shows, setShows] = useState([])

    useEffect(() => {
        loadShows()
    }, [])

    const loadShows = async () => {
        try {
            let { data } = await axios.get('/shows')
            let showsObj = {}
            for (let show of data.payload) {
                const {show_id, title, img_url, genre_name} = show
                showsObj[show.title] = {show_id, title, img_url, genre_name}
            }
            let showsArr = []
            for (let show in showsObj) {
                showsArr.push(showsObj[show])
            }
            setShows(showsArr)
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <Shows shows={shows} user_id={props.match.params.id} />
    )
}

export default ShowsContainer