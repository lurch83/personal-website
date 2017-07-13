import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import Box from '../Box/Box'
import someBlogPost from '../../blog-articles/some-blog-post.md'

class BlogItem extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      markdown: ''
    };
  }

  componentWillMount() {    
    const {file} = this.props.match.params            
    const item = require(`../../blog-articles/${file}.md`);
    
    fetch(item)
    .then(data => {      
      return data.text();
    })
    .then(text => {      
      this.setState({
        markdown: text
      });
    });    
  }
  
  render() {  
    const {markdown} = this.state;        
    return(
      <Box>        
        <ReactMarkdown source={markdown} />
      </Box>    
    );  
  }
};

export default BlogItem;