import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate();
  useEffect(()=>{
    if (localStorage.getItem('isAuthenticated') === 'true') {
      navigate('/home')
    }

  },[navigate])
  const [User,setUser] = useState({
    name:'',
    password:''
  });
  const HandleName = (e)=>{
    setUser((PrevUser)=>({
      ...PrevUser,
      name:e.target.value
    }))
  }
  const HandlePassword = (e)=>{
    setUser((PrevUser)=>({
      ...PrevUser,
      password:e.target.value
    }))
  }
  const HandleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5002/login/user',User)
      
        if (response.status == 202) {
          localStorage.setItem('isAuthenticated',true)
          const data = await response.data.user
          localStorage.setItem('name',data)
          

        }
        
      
      navigate('/home')
      
    }
    catch(error) {

      console.log("invalid credentials")
    }
 
      
    

  }
  return (
    <form onSubmit={HandleSubmit}>
        <label >Username</label>
        <input type="text" onChange={HandleName} placeholder='enter User name' />
        <label >Pasword</label>
        <input type="password" onChange={HandlePassword} placeholder='enter User Password' />
        <button type="submit">Login</button>
        <p>don't have an account <Link to='/signup'>Signup</Link></p>
    </form>
  )
}

export default Login