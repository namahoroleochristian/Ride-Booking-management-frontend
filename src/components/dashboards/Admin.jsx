import React from 'react'
import BottomNavBar from '../navbars/BottomNavBar'

import AdminBar from '../navbars/AdminBar'
import Users from '../views/Users'

function Admin() {
  return (
    <>
    <AdminBar/>
    <Users/>

    <BottomNavBar/>
    </>
  )
}

export default Admin