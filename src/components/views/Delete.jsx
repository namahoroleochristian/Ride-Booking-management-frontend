import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Delete() {
    const navigate = useNavigate()
    const {id} = useParams();
    const DeleteRide = async () => {
    try {
    const response = await fetch(`http://localhost:5002/delete/ride/${id}`,{
        method:'DELETE'
    })
    if (!response.ok) {
        console.log( await response.json());
        
    }
    console.log(response.body);
    

        navigate('/home')
    } catch (error) {
        console.log(error.message);
        navigate('/home')
  }
  }
  DeleteRide()
}

export default Delete