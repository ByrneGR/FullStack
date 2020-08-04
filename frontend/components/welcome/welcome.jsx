import React from 'react';
import { Link, Route } from 'react-router-dom';
import CampaignFormContainer from '../campaign/campaign_form/campaign_form_container'

export default ({ currentUser, logout, openModal }) => {
  const display = currentUser ? (
    <div>
      <p>{currentUser.first_name}</p>
      <button className="navbtn" onClick={logout}>Log Out</button>
    </div>) : (
      <div>
        <a className="navbtn" id="login-btn" onClick={() => openModal('login')}>Log In</a>
        &nbsp;&nbsp; 
        <a className="navbtn" onClick={() => openModal('signup')}>Sign Up</a>
      </div>
    );

  return (
    <div>
      {display}
    </div>
  )
}
