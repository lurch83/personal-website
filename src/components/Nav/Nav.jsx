import React from 'react';
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

const Nav = () => {
  return(
    
      <NavBox>
        HOME | Blog | About Me
      </NavBox>
    
    
  );    
}

export default Nav;