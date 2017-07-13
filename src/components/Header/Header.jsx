import React from 'react';
import Box from '../Box/Box'
import {Link} from 'react-router-dom';

const Header = () => {
  return(
    <Box>
      <Link to={'/'}><h1>Andrew Doyle</h1></Link>      
      <div>A somewhat tale blood, gears and software development.</div>
      <div>
        <Link to="/about">About</Link>
      </div>
    </Box> 
  );    
}

export default Header;