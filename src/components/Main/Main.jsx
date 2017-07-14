import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Box from '../Box/Box'
import BlogLink from '../BlogLink/BlogLink';
import Header from '../Header/Header';
import blogItems from '../../assets/blog.json';

class HomePage extends Component {
  
  render() {      
    return(
      <div>      
        <Header/>
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