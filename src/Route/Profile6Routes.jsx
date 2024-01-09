import React from 'react'
import { Routes, Route,Navigate } from 'react-router-dom';
import Home6 from '../components/Profiles/Profile6/Home6';
import Create6 from '../components/Profiles/Profile6/Create6';
import Update6 from '../components/Profiles/Profile6/Update6';
import Signup6 from '../components/Profiles/Profile6/Signup6';
import Login6 from '../components/Profiles/Profile6/Login6';

const Profile6Routes = () => {
  const user = localStorage.getItem("token");
  return (
    <div>
    <Routes>
      {user && <Route path="/" exact element={<Home6 />} />}
      
      {user &&<Route path='create' element={<Create6 />} />}
       {user &&<Route path='update' element={<Update6 />} />}
       {user && <Route path='update/:id' element={<Update6/>} />}
       <Route path="/signup" exact element={<Signup6 />} />
       <Route path="/login" exact element={<Login6 />} />
       <Route path="/" element={<Navigate replace to="/" />} />
     </Routes>

   </div>
  )
}

export default Profile6Routes