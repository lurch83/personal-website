import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import Box from '../Box/Box'
import someBlogPost from '../../blog/some-blog-post.md'

class HomePage extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      markdown: ''
    };
  }

  componentWillMount() {    
    const {fileName} = props;
    const location = `../../blog/${fileName}`;

    fetch(location)
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
        <h3>Blog Item</h3>
        <ReactMarkdown source={markdown} />
      </Box>    
    );  
  }
};

export default {BlogItem};