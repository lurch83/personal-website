import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Box from '../Box/Box'
import BlogLink from '../BlogLink/BlogLink';
import blogItems from '../../assets/blog.json';

class HomePage extends Component {
  
  render() {  

    return(
      <Box style={{height: 1200 + 'px'}}>
        <div className="featured-blog items">
          {blogItems.map((item, id) => (            
            <BlogLink
              item={item}
              key={id}
            />
          ))}
        </div>
      </Box>    
    );  
  }
};

export default HomePage;