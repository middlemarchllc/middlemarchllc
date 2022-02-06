import React from 'react';
import './Landing.css';
import logo from './images/logo.png';
import mmpartners from './images/mmpartners-wb.png';

const Landing = () => {

  return (
    <header className="landing">
      <div className="landing-text-box">
        <h1 className="landing-primary">
          <img src={logo} alt="logo" className="landing-logo-box" />
          <br></br>
          <img src={mmpartners} alt="logo" className="landing-logo" />
        </h1>
        <div className="landing-tagline">Financing and Investing in Global Growth Companies</div>
      </div>
    </header>
  );
}



export default Landing;