import React from 'react'
import SidebarStaff from './SidebarStaff'
import { Outlet } from 'react-router'

const DefaultLayoutStaff = () => {
  return (
    <div className='flex h-screen'>
        
        <SidebarStaff/>
        <Outlet/>
    </div>
  )
}

export default DefaultLayoutStaff