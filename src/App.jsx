import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import MainLogin from './MainLogin';
import Profile1Routes from './Route/Profile1Routes';
import Profile2Routes from './Route/Profile2Routes';
import Profile3Routes from './Route/Profile3Routes';
import Profile4Routes from './Route/Profile4Routes';
import Profile5Routes from './Route/Profile5Routes';
import Profile6Routes from './Route/Profile6Routes';
import Profile7Routes from './Route/Profile7Routes';





function App() {
  //const [count, setCount] = useState(0);

  
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyDjHmo7TjMrNUs5pInWkokmQSbCFV_BHo8",
  authDomain: "test-project-6d955.firebaseapp.com",
  databaseURL: "https://test-project-6d955-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-project-6d955",
  storageBucket: "test-project-6d955.appspot.com",
  messagingSenderId: "958574471765",
  appId: "1:958574471765:web:33ad364cb56c2a818dc2dc"
    };
    firebase.initializeApp(firebaseConfig);
  }, []);

  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLogin/>}/>

         
       
          <Route path='/profile1/*' element={<Profile1Routes />} />
          <Route path='/profile2/*' element={<Profile2Routes />} />
          <Route path='/profile3/*' element={<Profile3Routes />} />
          <Route path='/profile4/*' element={<Profile4Routes />} />
          <Route path='/profile5/*' element={<Profile5Routes />} />
          <Route path='/profile6/*' element={<Profile6Routes />} />
          <Route path='/profile7/*' element={<Profile7Routes />} />
          
          
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

