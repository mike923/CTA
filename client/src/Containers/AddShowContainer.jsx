import React, { useEffect } from 'react'
import axios from 'axios'

import { AddShow } from '../Components'

const AddShowContainer = (props) => {

    useEffect(() => {
        loadGenres()
    }, [])

    const loadGenres = async () => {
        try {
            const { data } = await axios.get('/genres')
            console.log(data.payload)
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <AddShow />
    )
}

export default AddShowContainer