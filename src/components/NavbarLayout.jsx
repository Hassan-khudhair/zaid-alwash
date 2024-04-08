import React from 'react'
import Header from '../layout/Header'
import { Outlet } from 'react-router-dom'

function NavbarLayout() {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default NavbarLayout