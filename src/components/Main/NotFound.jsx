import React from 'react';
import Box from '../Box/Box'
import sadParrot from '../../assets/images/sadparrot.gif';

const NotFound = () => {
  return(
    <Box>      
        <h3>Page Not Found <img src={sadParrot} /></h3>
    </Box> 
  );    
}

export default NotFound;