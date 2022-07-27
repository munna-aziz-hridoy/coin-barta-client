import React from 'react'
import spinner from '../assets/photo/Spinner.gif'
const Spinner = () => {
    return (
        <div className="flex h-screen justify-center items-center ">
            <img src={spinner} alt="spinner" />
        </div>
    )
}

export default Spinner
