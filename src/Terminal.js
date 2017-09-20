import React from 'react';
import './Terminal.css';

export default ({title, icon, response}) => {
  return (
    <div className="terminal-wrapper">
      <div id="bar">
        <div id="red"></div>
        <div id="yellow"></div>
        <div id="green"></div>
      </div>
      <div className="terminal-content">
        <div id="screen">
          <p className="font">root@cerkinfo:~# {title}</p>
          > <i className={"fa fa-" + icon} aria-hidden="true"></i> {response}
        </div>
      </div>
    </div>
  );
};
