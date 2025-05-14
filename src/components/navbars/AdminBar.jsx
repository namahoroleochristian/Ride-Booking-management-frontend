import React from 'react'
import { Link } from 'react-router-dom'

function AdminBar() {
  return (
    <>
    <nav className='flex '>
        <ul className='list-none'>
            <li>Ride With Us</li>
        </ul>
        <ul className='NavUl'>
            <li>
                
                <Link to={`/admin/home`} className='Link'>users</Link>
                </li>
                <li>
                <Link to={`/drivers`} className='Link'>driver</Link>
                </li>
            <li>
                
                <Link to={`/logout`} className='Link'>logout</Link>
                </li>
        </ul>
    </nav>
  
    </>
  )
}

export default AdminBar