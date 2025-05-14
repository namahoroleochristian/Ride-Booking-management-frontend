import React from 'react'
import { Link } from 'react-router-dom'

function AuthBar() {
  return (
    <>
    <nav className='flex '>
        <ul className='list-none'>
            <li>Ride With Us</li>
        </ul>
        <ul className='NavUl'>
            <li className='RideItems'>
                
                <Link to={`/`} className='Link'>Login</Link>
                </li>
            <li className='RideItems'>
                
                <Link to={`/admin`} className='Link'>Other User</Link>
                </li>
        </ul>
    </nav>
  
    </>
  )
}

export default AuthBar