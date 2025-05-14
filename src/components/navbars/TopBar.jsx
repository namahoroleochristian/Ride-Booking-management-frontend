import React from 'react'
import { Link } from 'react-router-dom'

function TopBar() {
  return (
    <>
    <nav className='flex '>
        <ul className='list-none'>
            <li>Ride With Us</li>
        </ul>
        <ul>
            <li>
                
                <Link to={`/logout`} className='Link'>logout</Link>
                </li>
        </ul>
    </nav>
  
    </>
  )
}

export default TopBar