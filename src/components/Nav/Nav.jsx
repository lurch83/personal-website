import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavBox = styled.div`
  background-color: #000;  
  padding: 20px;  
  -moz-box-shadow: 0 0 3px #ccc;
  -webkit-box-shadow: 0 0 3px #ccc;
  box-shadow: 0 0 5px #ccc;
  position:fixed;
  top:0;
  width:100%;
  z-index:100;
`;

const Nav = () => {
  return(
    <NavBox>
      Navigation
    </NavBox>
  );    
}

export default Nav;