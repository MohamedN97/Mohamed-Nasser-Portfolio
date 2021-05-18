import React from 'react';
import logo from "../logo.png";
import lin from "../in.png";
import git from "../git.png";
import be from "../be.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'; 

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
          <div className="container">
              <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color:"#fff"}} />
              </button>
            
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  {/* <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.linkedin.com/in/mohamedn97/" target="_blank"><img className="icon" src={lin} alt="linkedin" /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://github.com/MohamedN97" target="_blank"><img className="icon" src={git} alt="GitHub" /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.behance.net/nassereliea42e" target="_blank"><img className="icon" src={be} alt="Behance" /></a>
                  </li>
                </ul>
              </div>
          </div>
        </nav>
    )
}

export default Navbar
