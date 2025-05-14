import React, { useEffect, useState } from 'react'
import TopBar from '../navbars/TopBar'

import BottomNavBar from '../navbars/BottomNavBar'
import { useNavigate, useParams } from 'react-router-dom';
import AuthBar from '../navbars/AuthBar';
import AdminBar from '../navbars/AdminBar';



function UpdateUser() {
    const {id} = useParams()
    const navigate = useNavigate()

    const [Updatedata,setUpdatedata] = useState({
        name:'',
        password:''
    });
   
     
  const HandleName = (e)=>{
    setUpdatedata((PrevUser)=>({
      ...PrevUser,
      name:e.target.value
    }))
  };
 
  const HandlePassword = (e)=>{
    setUpdatedata((PrevUser)=>({
      ...PrevUser,
      password:e.target.value
    }))
  };
   

    

    
        const HandleUpdate = async (e)=>{
            e.preventDefault();

            try {
                console.log(Updatedata);
                console.log(id);
                const ids="6823d94c50769f111ec2ed6c";
                const response = await fetch(`http://localhost:5002/update/user/${id}`,{
                        method:"PUT",
                        headers: {"Content-Type":'Application/json'},
                        body:JSON.stringify(Updatedata)
                    });
                    
                    if (!response.ok) {
                        console.log(response.body);
                        
                    }
                    navigate('/admin/home')
                    const data =await response.json()
                    console.log(id);
                    
                    console.log(data);
                    
                    
                } catch (error) {
                console.log(error.message);
                
            }
        }
  return (
    <>
    <AdminBar/>
    <form className='RideForm  ' onSubmit={HandleUpdate}>
         
        
       
        <label >name</label><br />
        <input type="text"  onChange={HandleName} placeholder='enter new name' /><br />
        <label >password</label><br />
        <input type="text"  onChange={HandlePassword} placeholder='enter new password' /><br />
        
        
        <button type='submit'> Update</button>
    </form>
    <BottomNavBar/>
    </>
  )
}

export default UpdateUser