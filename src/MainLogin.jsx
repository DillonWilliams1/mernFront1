import React from 'react'
import { Link } from 'react-router-dom';

function MainLogin() {
  return (
    <div>

<div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">NSBM Canteens</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn m-1">Login</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
  <li>
      <Link to="/profile1/login">Hostel Canteen</Link>
  </li>
  <li>
    <Link to="/profile2/login">Audi Canteen</Link>
  </li>
  <li>
    <Link to="/profile3/login">Profile 3</Link>
  </li>
    <li><a>Edge Canteen</a>
            <ul>
            <li>
                <Link to="/profile4/login">Profile 4</Link>
           </li>
           <li>
                <Link to="/profile5/login">Profile 5</Link>
           </li>
           <li>
                <Link to="/profile6/login">Profile 6</Link>
           </li>
           <li>
                <Link to="/profile7/login">Profile 7</Link>
           </li>
            
           
            </ul>
    
    </li>

  </ul>
</div>
    </div>
  </div>
</div>



    </div>
  )
}

export default MainLogin