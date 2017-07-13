import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import Box from '../Box/Box'
import someBlogPost from '../../blog/some-blog-post.md'

class BlogItem extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      markdown: ''
    };
  }

  componentWillMount() {    
    let {fileName} = this.props;
    
    const {id} = this.props.match.params
    
    fileName = 'some-blog-post.md';
    const location = `../../blog/${fileName}`;

    fetch(someBlogPost)
    .then(data => {      
      return data.text();
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

export default BlogItem;