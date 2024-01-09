import React from 'react'
import { Routes, Route,Navigate } from 'react-router-dom';
import Home4 from '../components/Profiles/Profile4/Home4';
import Create4 from '../components/Profiles/Profile4/Create4';
import Update4 from '../components/Profiles/Profile4/Update4';
import Signup4 from '../components/Profiles/Profile4/Signup4';
import Login4 from '../components/Profiles/Profile4/Login4';

const Profile4Routes = () => {
  const user = localStorage.getItem("token");
  return (
    <div>
    <Routes>
      {user && <Route path="/" exact element={<Home4 />} />}
      
      {user &&<Route path='create' element={<Create4 />} />}
      {user && <Route path='update' element={<Update4 />} />}
      {user && <Route path='update/:id' element={<Update4/>} />}
       <Route path="/signup" exact element={<Signup4 />} />
       <Route path="/login" exact element={<Login4 />} />
       <Route path="/" element={<Navigate replace to="/" />} />
     </Routes>

   </div>
  )
}

export default Profile4Routes