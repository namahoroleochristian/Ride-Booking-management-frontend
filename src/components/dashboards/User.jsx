import React from 'react'
import BottomNavBar from '../navbars/BottomNavBar'
import TopBar from '../navbars/TopBar'
import Bookings from '../views/bookings'

function User() {
  return (
    <>
    <TopBar/>
    <Bookings/>

    <BottomNavBar/>
    </>
  )
}

export default User