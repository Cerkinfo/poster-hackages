import React, { Component } from 'react';
import Terminal from './Terminal';
import logo from './logo.png';
import location from './location.png';
import ci_logo from './ci.png';
import hackages_logo from './hackages.png';
import './App.css';

export default () => {
  return (
    <div className="App">
      <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title">Javascript Workshop</h1>
        <h1 className="subtitle">{"Functionnal programming with Javascript"}</h1>
      </div>
      <div className="white_arrow date">
        <Terminal title="when" icon="calendar" response="Thursday 21 September 2017"/>
      </div>
      <div className="yellow_arrow location">
        <Terminal title="where" icon="map-marker" response="ULB Campus de la Plaine P.OF2072"/>
        <br/>
        <img src={location} className="location-logo" alt="logo" />
      </div>
      <div className="white_arrow advices">
        <Terminal title="advice" icon="laptop" response="Bring your own laptop"/>
      </div>
      <div className="footer">
        <img src={hackages_logo} className="footer-logo" alt="logo" />
        <img src={ci_logo} className="footer-logo" alt="logo" />
      </div>
    </div>
  );
};
