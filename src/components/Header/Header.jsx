import React, {Component} from 'react';
import Box from '../Box/Box'
import styled from 'styled-components';


const Name = styled.div`

`;

class Header extends Component {

  render() {

  return(
    <div>    
      <Box>
        <Name>Andrew Doyle</Name>
        {/*<div>An tale of tears, gears and software development.</div>*/}
      </Box>
    </div>
        
    ); 
  }   
}

export default Header;