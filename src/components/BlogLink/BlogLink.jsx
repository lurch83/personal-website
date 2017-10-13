import React, { PropTypes } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';

const Title = styled.h2`
  a {
    text-decoration: none;
    color: #2288bb;
  }

  a:hover{
    text-decoration: underline;
  }
`;

const Date = styled.div`

`;

const BlogLink = props => {  
  const {item} = props;

  return(
    <div className="featured-item">    
      
        <Title>
          <Link to={`/blog/${item.file}`}>{item.title}</Link>
        </Title>
        
        <Date>{moment().format('Do MMMM YYYY')}</Date>              
              
      
    </div>
  );  
}
  


BlogLink.propTypes = {
  item: PropTypes.object
};

export default BlogLink;