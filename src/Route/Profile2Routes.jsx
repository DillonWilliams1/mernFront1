import React from 'react'
import { Routes, Route,Navigate } from 'react-router-dom';
import Home2 from '../components/Profiles/profile2/Home2'
import Create2 from '../components/Profiles/profile2/Create2'
import Update2 from '../components/Profiles/profile2/Update2'
import Signup2 from '../components/Profiles/Profile2/Signup2';
import Login2 from '../components/Profiles/Profile2/Login2';

const Profile2Routes = () => {
  const user2 = localStorage.getItem("token");
  
  return (
    <div>
      <Routes>
        
        {user2 && <Route path="/" exact element={<Home2 />} />}
        {user2 &&<Route path='/create' element={<Create2 />} />}
        {user2 &&<Route path='/update' element={<Update2 />} />}
        {user2 &&<Route path='/update/:id' element={<Update2 />} />}
        <Route path="/signup" exact element={<Signup2 />} />
        <Route path="/login" exact element={<Login2 />} />
        <Route path="/" element={<Navigate replace to="/" />} />
  
      </Routes>

    </div>
  );
}

export default Profile2Routes