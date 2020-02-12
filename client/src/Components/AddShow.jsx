import React, { useState } from 'react'

const AddShow = (props) => {
    const [img, setImg] = useState('')
    const [show, setShow] = useState('')

    const submit = (event) => {
        event.preventDefault()
        props.addShow()
    }

    return (
        <form onSubmit={submit}>
            <input 
                type="text"
                value={img}
                onChange={({target:{value}}) => setImg(value)}
            />
            <input 
                type="text"
                value={show}
                onChange={({target:{value}}) => setShow(value)}
            />
            <select name="" id="">
                {}
            </select>
        </form>
    )
}

export default AddShow