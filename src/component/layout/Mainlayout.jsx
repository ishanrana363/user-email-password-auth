import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'

const Mainlayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}

export default Mainlayout
