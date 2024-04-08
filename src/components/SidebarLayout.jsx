import React from 'react'
import Sidebar from '../layout/Sidebar'
import { Outlet } from 'react-router-dom'

function SidebarLayout() {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    )
}

export default SidebarLayout