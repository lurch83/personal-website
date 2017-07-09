import React, { PropTypes } from 'react';

const BlogLink = props => {  
  const {item} = props;

  return(
    <div className="featured-item">    
      <div className="featured-item__info">
        <p><b>{item.title}</b></p>      
        <p>{item.date}</p>      
      </div>
    </div>
  );  
}
  


BlogLink.propTypes = {
  item: PropTypes.object
};

export default BlogLink;