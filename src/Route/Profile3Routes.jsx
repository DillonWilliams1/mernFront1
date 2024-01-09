import React from 'react'
import { Routes, Route,Navigate } from 'react-router-dom';
import Home3 from '../components/Profiles/Profile3/Home3'
import Create3 from '../components/Profiles/profile3/Create3'
import Update3 from '../components/Profiles/profile3/Update3'
import Signup3 from '../components/Profiles/Profile3/Signup3';
import Login3 from '../components/Profiles/Profile3/Login3';

const Profile3Routes = () => {
  const user = localStorage.getItem("token");
  return (
   <div>
    <Routes>
       {user && <Route path="/" exact element={<Home3 />} />}
       
       {user && <Route path='create' element={<Create3 />} />}
       {user && <Route path='update' element={<Update3 />} />}
       {user && <Route path='update/:id' element={<Update3/>} />}
        <Route path="/signup" exact element={<Signup3 />} />
        <Route path="/login" exact element={<Login3 />} />
        <Route path="/" element={<Navigate replace to="/" />} />
      </Routes>
  </div>
  )
}

export default Profile3Routes