import React, {Component} from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import someBlogPost from '../../blog/some-blog-post.md'

//TODO: Move this to somewhee shared
const Box = styled.div`
  background-color: #eee;
  margin-top: 20px;
  padding: 20px;  
  -moz-box-shadow: 0 0 3px #ccc;
  -webkit-box-shadow: 0 0 3px #ccc;
  box-shadow: 0 0 5px #ccc;
`;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ''
    };
  }

  componentWillMount() {    
    fetch(someBlogPost)
    .then(data => {
      return data.text()
    })
    .then(text => {      
      this.setState({
        markdown: text
      });
    })
  }
  
  render() {  
    const {markdown} = this.state;        
    return(
      <Box>
        <h3>Blog</h3>  
        
        
        <ReactMarkdown source={markdown} />
      </Box>    
    );  
  }
};

export default HomePage;