import React from 'react';
import "./Nav.css";
import logo from './logo.svg';

const Nav = props =>{
    return(
        <div className="Nav">
        <header className="Nav-header">
          <img src={logo} className="Nav-logo" alt="logo" />
          <p className="Nav-title">Built with React</p>
        </header>
      
      </div>

    )
 

}


export default Nav;