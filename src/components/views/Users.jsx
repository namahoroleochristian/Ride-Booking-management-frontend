import React, { useEffect, useState } from 'react'
import TopBar from '../navbars/TopBar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Users = () => {
  const navigate = useNavigate()
    const [data,setData] = useState(null); 
    const [User,setUser] = useState({
    name:'',
    // role:'',
    password:''
  })
     const API_URL = "http://localhost:5002/get/ride"
    useEffect(()=>{

        const fetchData = async  ()=>{
            
                try {
                    const response = await fetch('http://localhost:5002/get/users');
                if (!response.ok) {
                    console.log(response.status);
                    console.log(response.body);
                    }
                    const dataA = await response.json()
                    console.log(dataA);
                    
                    setData(dataA);
                } catch (error) {
                    console.log(error.message);
                    
                }
                
            
        }
        fetchData();
    },[])
    
    if (!data) {
       return <h1>data not found</h1> 
    }

const HandlePassword = (e)=>{
    setUser((PrevUser)=>({
      ...PrevUser,
      password:e.target.value
    }))
  };
const HandleName = (e)=>{
    setUser((PrevUser)=>({
      ...PrevUser,
      name:e.target.value
    }))
  };   

const HandleSubmit =async (e)=>{
    e.preventDefault();
    try {
      const response =await axios.post('http://localhost:5002/register/user',User)
    //   navigate('/admin/home')
      console.log("success",response.data);
      
    } catch (error) {
      console.log(error.message);
      console.log(response.body);
      
    }
  }
    
  return (
    <>

        <form className='RideForm' onSubmit={HandleSubmit}>
          <h2>Add User</h2>
         <input type="text"  onChange={HandleName} placeholder='enter User name'/>
    <input type="password"   onChange={HandlePassword} placeholder='enter User password'/>
    <button type='submit'>submit</button>
          
        </form>
        <ul>
          
              <li  className='list-none RideLi justify-center w-full '>
                <span  className='RideItemTitle'>Name </span>
                <span  className='RideItemTitle'>Role  </span>
                <span  className='RideItemTitle'> Created At </span>
                <span  className='RideItemTitle'>     </span>
                <Link to={`/admin/home`} className='Link'>Action</Link>
              </li>
        </ul>
               
        {data.map((item,index)=>{

            return  (
                <>
              <ul className=' list-none  '>  
              <li key={index} className='list-none RideLi justify-center w-full '>
                <span  className='RideItem'>  {item.name} </span>
                <span  className='RideItem'>{item.role}  </span>
                <span  className='RideItem'>{item.createdAt}  </span>
                {/* <span  className='RideItem'>{item.drop_off_at}</span> */}
                <Link to={`/edit/user/${item._id}`} className='LinkUpdate'>Update</Link>
                <Link to={`/delete/${item._id}`} className='LinkDelete'>delete</Link>
              </li>
              
              </ul>
                </>
          )
        })}
    </>
  )
}

export default Users