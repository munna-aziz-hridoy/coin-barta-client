import React from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './Nav'
import Title from './Title'

const Header = () => {
    const location = useLocation()
    const navBar = location.pathname
    if (navBar == 'admin') {
        console.log('hello')
    } else {
        console.log('object')
    }
    return (
        <>
            <Title />
            <Nav />
        </>
    )
}

export default Header
