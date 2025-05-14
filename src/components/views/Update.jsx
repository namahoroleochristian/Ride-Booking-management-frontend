import React, { useEffect, useState } from 'react'
import TopBar from '../navbars/TopBar'

import BottomNavBar from '../navbars/BottomNavBar'
import { useNavigate, useParams } from 'react-router-dom';



function Update() {
    const {id} = useParams()
    const navigate = useNavigate()

    const [Updatedata,setUpdatedata] = useState({
       driver:"",
       customer:"",
       pick_up_at:"",
       drop_off_at:""
    });
   
    
    const Handledriver = (e)=>{
        setUpdatedata((PrevData)=>({
            ...PrevData,
           driver :e.target.value
        }))

    }
    const Handlecustomer = (e)=>{
setUpdatedata((PrevData)=>({
    ...PrevData,
   customer :e.target.value
}))
    }
    const Handlelocation = (e)=>{

        setUpdatedata((PrevData)=>({
            ...PrevData,
            pick_up_at:e.target.value
        }))
    }
//     const HandleTime = (e)=>{
// setUpdatedata((PrevData)=>({
//     ...PrevData,
//     ride_time:e.target.value
// }))
   // }
    const Handledestination = (e)=>{
        setUpdatedata((PrevData)=>({
            ...PrevData,
            drop_off_at:e.target.value
        }))

    }
        const HandleUpdate = async (e)=>{
            e.preventDefault();

            try {
                console.log(Updatedata);
                console.log(id);
                const ids="6823d94c50769f111ec2ed6c";
                const response = await fetch(`http://localhost:5002/update/ride/${ids}`,{
                        method:"PUT",
                        headers: {"Content-Type":'Application/json'},
                        body:JSON.stringify(Updatedata)
                    });
                    
                    if (!response.ok) {
                        console.log(response.body);
                        
                    }
                    navigate('/home')
                    // const data =await response.json()
                    // console.log(data);
                    
                    
                } catch (error) {
                console.log(error.message);
                
            }
        }
  return (
    <>
    <TopBar/>
    <form onSubmit={HandleUpdate}>
        
        <label >driver</label><br />
        <input type="text"  onChange={Handledriver}  /><br />
        <label >customer</label><br />
        <input type="text"  onChange={Handlecustomer}  /><br />
        <label >location</label><br />
        <input type="text"  onChange={Handlelocation}  /><br />
        <label >destination</label><br />
        <input type="text"  onChange={Handledestination}  /><br />
        
        
        <button type='submit'> Update</button>
    </form>
    <BottomNavBar/>
    </>
  )
}

export default Update