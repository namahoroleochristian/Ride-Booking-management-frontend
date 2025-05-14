import React, { useEffect, useState } from 'react'
import TopBar from '../navbars/TopBar';
import { Link, useNavigate } from 'react-router-dom';

const Bookings = () => {
  const navigate = useNavigate()
    const [data,setData] = useState(null); 
    const [Ride,SetRide] = useState({
      driver:'',
      customer:localStorage.getItem('name'),
      pick_up_at:'',
      drop_off_at:'',

    })
     const API_URL = "http://localhost:5002/get/ride"
    useEffect(()=>{

        const fetchData = async  ()=>{
            
                try {
                    const response = await fetch(API_URL);
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
const HandleLocation = (e)=>{
  SetRide(PrevRide=>({
    ...PrevRide,
   pick_up_at :e.target.value
  }))
}
const HandleDestination = (e)=>{
  SetRide(PrevRide=>({
    ...PrevRide,
    drop_off_at:e.target.value
  }))
}
const HandleDriver = (e)=>{
  SetRide(PrevRide=>({
    ...PrevRide,
    driver:e.target.value
  }))
}    

const HandleBooking = async (e)=>{
  e.preventDefault()
  try {
    const response = await fetch('http://localhost:5002/book/ride',{
      method:'POST',
      headers: {"Content-Type":'Application/json'},
      body:JSON.stringify(Ride)
    })
    
    if(!response.ok){
      console.log(response.status);
      }
      
      navigate('/')
  } catch (error) {
    console.log(error.message);
    
  }
}
    
  return (
    <>

        <form className='RideForm' onSubmit={HandleBooking}>
          <h2>Where Do You want to go</h2>
          <input type="text" onChange={HandleLocation} placeholder='enter a  location' /><br />
          <input type="text" onChange={HandleDestination} placeholder='enter a  destination' /><br />
          <input type="text" onChange={HandleDriver}  placeholder='enter a driver'/><br />
          <button>Book a ride</button>
        </form>
        <ul>
          
              <li  className='list-none RideLi justify-center w-full '>
                <span  className='RideItemTitle'>Driver </span>
                <span  className='RideItemTitle'>Cutomer  </span>
                <span  className='RideItemTitle'> location </span>
                <span  className='RideItemTitle'>destination</span>
                <Link to={`/edit/`} className='Link'>Action</Link>
              </li>
        </ul>
               
        {data.map((item,index)=>{

            return  (
                <>
              <ul className=' list-none  '>  
              <li key={index} className='list-none RideLi justify-center w-full '>
                <span  className='RideItem'>  {item.driver} </span>
                <span  className='RideItem'>{item.customer}  </span>
                <span  className='RideItem'>{item.pick_up_at}  </span>
                <span  className='RideItem'>{item.drop_off_at}</span>
                <Link to={`/edit/${item._id}`} className='LinkUpdate'>Update</Link>
                <Link to={`/delete/${item._id}`} className='LinkDelete'>delete</Link>
              </li>
              
              </ul>
                </>
          )
        })}
    </>
  )
}

export default Bookings