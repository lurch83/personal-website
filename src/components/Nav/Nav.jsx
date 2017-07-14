import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';



const NavBox = styled.div`
  background-color: #000;  
  color: #fff;
  padding: 20px;  
  -moz-box-shadow: 0 0 3px #ccc;
  -webkit-box-shadow: 0 0 3px #ccc;
  box-shadow: 0 0 2px #ccc;
  position: sticky;
  top:0px;  
`;

class Nav extends Component {
  
  render() {  
  
    return(    
      <NavBox className="nav-topnav">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>        
      </NavBox>
    );    
  }
}

export default Nav;