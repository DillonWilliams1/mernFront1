import React from 'react'
import { Routes, Route,Navigate } from 'react-router-dom';
import Home5 from '../components/Profiles/Profile5/Home5';
import Create5 from '../components/Profiles/Profile5/Create5';
import Update5 from '../components/Profiles/Profile5/Update5';
import Signup5 from '../components/Profiles/Profile5/Signup5';
import Login5 from '../components/Profiles/Profile5/Login5';

const Profile5Routes = () => {
  const user = localStorage.getItem("token");
  return (
    <div>
    <Routes>
      {user && <Route path="/" exact element={<Home5 />} />}
      
      {user && <Route path='create' element={<Create5 />} />}
       {user &&<Route path='update' element={<Update5 />} />}
       {user && <Route path='update/:id' element={<Update5/>} />}
       <Route path="/signup" exact element={<Signup5 />} />
       <Route path="/login" exact element={<Login5 />} />
       <Route path="/" element={<Navigate replace to="/" />} />
     </Routes>

   </div>
  )
}

export default Profile5Routes