import React, {Component} from 'react';
import Box from '../Box/Box'
import BlogLink from '../BlogLink/BlogLink';
import blogItems from '../../assets/blog.json';

class HomePage extends Component {
  
  render() {  

    return(
      <Box>
        <div className="featured-blog items">
          {blogItems.map((item, i) => (            
            <BlogLink
              item={item}
              key={i}
            />
          ))}
        </div>
      </Box>    
    );  
  }
};

export default HomePage;