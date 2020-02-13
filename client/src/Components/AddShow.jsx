import React, { useState } from 'react'

const AddShow = ({genres, addShow}) => {
    const [img_url, setImg] = useState('')
    const [title, setShow] = useState('')
    const [genre_name, setGenre] = useState('')
    const [genre_id, setSelectedGenre] = useState(0)

    const submit = (event) => {
        event.preventDefault()

        const newShow = {title, img_url, genre_id, genre_name}
        addShow(newShow)
        setImg('')
        setShow('')
        setGenre('')
        setSelectedGenre(0)
    }

    return (
        <form onSubmit={submit}>
            <input 
                type="text"
                value={img_url}
                onChange={({target:{value}}) => setImg(value)}
                required
            />
            <input 
                type="text"
                value={title}
                onChange={({target:{value}}) => setShow(value)}
                required
            />
            {genre_id
                ? ''
                : (<input 
                    type="text"
                    value={genre_name}
                    onChange={({target:{value}}) => setGenre(value)}
                    required
                />)
            }
            <select value={genre_id} onChange={({target: {value}}) => setSelectedGenre(Number(value))}>
                {genres.map(({genre_name, id}, i) => (
                    <option key={i} value={id}>{genre_name}</option>
                ))}
            </select>
            <button type='submit'>Add Show</button>
        </form>
    )
}

export default AddShow