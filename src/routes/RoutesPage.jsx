import { BrowserRouter, Routes ,Route} from "react-router-dom";
import React from 'react'
import Login from "../components/auth/login";
import SignUp from "../components/auth/signup";
import User from "../components/dashboards/user";
import Bookings from "../components/views/bookings";
import Update from "../components/views/Update";
import Delete from "../components/views/delete";
import Logout from "../components/auth/Logout";
import AuthBar from "../components/navbars/AuthBar";
import AdminAuth from "../components/auth/AdminAuth";
import Admin from "../components/dashboards/Admin";
import UpdateUser from "../components/views/UpdateUser";

function RoutesPage() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<User/>} />
        <Route path="/edit/:id" element={<Update/>} />
        <Route path="/edit/user/:id" element={<UpdateUser/>} />
        <Route path="/rides" element={<Bookings/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/admin" element={<AdminAuth/>} />
        <Route path="/admin/home" element={<Admin/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/delete/:id" element={<Delete/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default RoutesPage