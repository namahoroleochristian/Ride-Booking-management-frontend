import axios from 'axios';

import { useState } from 'react'
import { Link } from 'react-router-dom';

function Signup() {
  const [User,setUser] = useState({
    name:'',
    // role:'',
    password:''
  })
  const HandleName = (e)=>{
    setUser((PrevUser)=>({
      ...PrevUser,
      name:e.target.value
    }))
  };
  // const HandleRole = (e)=>{
  //   setUser((PrevUser)=>({
  //     ...PrevUser,
  //     role:e.target.value
  //   }))
  // };
  const HandlePassword = (e)=>{
    setUser((PrevUser)=>({
      ...PrevUser,
      password:e.target.value
    }))
  };
  const HandleSubmit =async (e)=>{
    e.preventDefault();
    try {
      const response =await axios.post('http://localhost:5002/register/user',User)
      console.log("success",response.data);
      
    } catch (error) {
      console.log(error.message);
      console.log(response.body);
      
    }
  }


  return (
   <form onSubmit={HandleSubmit}>
    {/* <select  onChange={HandleRole} value={User.role}>
      <option value="user">user</option>
      <option value="Admin">Other</option>
      <option value="driver">driver</option>
    </select> */}
    <input type="text"  onChange={HandleName}/>
    <input type="password"   onChange={HandlePassword}/>
    <button type='submit'>submit</button>
            <p>already have an account <Link to='/'>Login</Link></p>
    
   </form>
  )
}

export default Signup