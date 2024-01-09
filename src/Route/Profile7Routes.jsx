import React from 'react'
import { Routes, Route,Navigate } from 'react-router-dom';
import Home7 from '../components/Profiles/Profile7/Home7';
import Create7 from '../components/Profiles/Profile7/Create7';
import Update7 from '../components/Profiles/Profile7/Update7';
import Signup7 from '../components/Profiles/Profile7/Signup7';
import Login7 from '../components/Profiles/Profile7/Login7';

const Profile7Routes = () => {
  const user = localStorage.getItem("token");
  return (
    <div>
    <Routes>
      {user && <Route path="/" exact element={<Home7 />} />}
      
      {user &&<Route path='create' element={<Create7 />} />}
       {user &&<Route path='update' element={<Update7 />} />}
       {user && <Route path='update/:id' element={<Update7/>} />}
       <Route path="/signup" exact element={<Signup7 />} />
       <Route path="/login" exact element={<Login7 />} />
      <Route path="/" element={<Navigate replace to="/" />} />
     </Routes>

   </div>
  )
}

export default Profile7Routes