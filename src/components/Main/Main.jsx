import React, {Component} from 'react';
import Box from '../Box/Box'
import BlogLink from '../BlogLink/BlogLink';
import blogItems from '../../assets/blog.json';

class HomePage extends Component {
  
  render() {      
    return(
      <div>              
        <Box>
          <div className="featured-blog items">
            {blogItems.map((item, id) => (            
              <BlogLink
                item={item}
                key={id}
              />
            ))}
          </div>
        </Box>    
      </div>
    );  
  }
};

export default HomePage;