import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
  const navigate = useNavigate()
  useEffect(()=>{
    localStorage.setItem('isAuthenticated',false)
    navigate('/')
  })
}

export default Logout