import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
  const navigate = useNavigate()
  useEffect(()=>{
    localStorage.setItem('isAuthenticated',false)
    localStorage.setItem('role',null)
    navigate('/')
  })
}

export default Logout