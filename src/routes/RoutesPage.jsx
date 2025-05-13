import { BrowserRouter, Routes ,Route} from "react-router-dom";
import React from 'react'
import Login from "../components/auth/login";
import SignUp from "../components/auth/signup";
import User from "../components/dashboards/user";

function RoutesPage() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<User/>} />
        <Route path="/signup" element={<SignUp/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default RoutesPage