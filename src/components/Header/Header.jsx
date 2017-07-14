import React, {Component} from 'react';
import Box from '../Box/Box'
import Nav from '../Nav/Nav';
import {Link} from 'react-router-dom';

class Header extends Component {

  render() {

  return(
    <div>    
      <Box>
        <Link to={'/'}><h1>Andrew Doyle</h1></Link>      
        <div>A somewhat tale blood, gears and software development.</div>
        <div>
          <Link to="/about">About</Link>
        </div>
      </Box>
    </div>
        
    ); 
  }   
}

export default Header;