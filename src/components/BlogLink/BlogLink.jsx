import React, { PropTypes } from 'react';
import {Link} from 'react-router-dom';

const BlogLink = props => {  
  const {item} = props;

  return(
    <div className="featured-item">    
      <div className="featured-item__info">
        <p><b>{item.title}</b></p>      
        <p>{item.date}</p>      
        <Link to={`/blog/${item.id}`}>Blog Item</Link>      
      </div>
    </div>
  );  
}
  


BlogLink.propTypes = {
  item: PropTypes.object
};

export default BlogLink;