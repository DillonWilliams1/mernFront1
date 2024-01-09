import React from 'react';
import { Routes, Route,Navigate } from 'react-router-dom';
import Home1 from '../components/Profiles/Profile1/Home1';
import Create1 from '../components/Profiles/Profile1/Create1';
import Update1 from '../components/Profiles/Profile1/Update1';
import Signup1 from '../components/Profiles/Profile1/Signup1';
import Login1 from '../components/Profiles/Profile1/Login1';
import Order1 from '../components/Profiles/Profile1/Order1';

const Profile1Routes = () => {
  const user1 = localStorage.getItem("token");
  
  return (
    <div>
      <Routes>
        
        {user1 && <Route path="/" exact element={<Home1 />} />}
        {user1 && <Route path="/create"  element={<Create1 />} />}
        {user1 && <Route path='/update' element={<Update1 />} />}
        {user1 && <Route path='/update/:id' element={<Update1 />} />}
        {user1 && <Route path='/order' element={<Order1 />} />}
        <Route path="/signup" exact element={<Signup1 />} />
        <Route path="/login" exact element={<Login1 />} />
        <Route path="/" element={<Navigate replace to="/" />} />
  
      </Routes>

    </div>
  );
};

export default Profile1Routes;
