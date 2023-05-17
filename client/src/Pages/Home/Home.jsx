import React from 'react';
import Topbar from '../../Components/Topbar/Topbar';
import './Home.css';
import ContentSection from '../../Components/ContentSection/ContentSection';

function Home() {
  return (
    <div className="container-fluid" style={{padding:'0'}}>
        <Topbar/>
        <div className="home-header">
          <div className="home-header-bg"></div>
          <h2>Computer Engineering</h2>
          <p>142,765 Computer Engineers follow this</p>
        </div>
        <ContentSection/>
    </div>
  )
}

export default Home
