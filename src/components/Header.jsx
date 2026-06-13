import React, { useContext } from 'react'
import { assets } from '../assets/assets.js';
import { AppContext } from '../Context/AppContext.jsx';

const Header = () => {
  const {userData} = useContext(AppContext);
  return (
    <div className="text-center d-flex flex-column align-items-center justify-contenr-center py-5 px-3"  style={{minHeight:"80vh"}}>
          <img src={assets.header} alt="header"  width={120} className='mb-4' />

          <h5 className="fw-semibold">
             Hey {userData ? userData.name : 'Developer'} <span role="img" arial-label="wave">👋</span>
          </h5>
          <h1 className='fw-bold display-5 mb-3'>Welcome to our product</h1>


          <p className="text-muted fs-5mb-4" style={{maxWidth:"500px"}}>
            Let's Start with product tour but before this you can setup the authentication first!
          </p>

          <button className="btn btn-outline-dark rounded-pill p-4 py-2">
            Get Started
          </button>


    </div>
  )
}

export default Header;