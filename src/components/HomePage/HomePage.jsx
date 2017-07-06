import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import someBlogPost from '../../blog/some-blog-post.md'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    console.log('STATE', this.state)
    return(
      <div>
        <p className="App-intro test">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>  
        <h3>Blog</h3>        
        <ReactMarkdown source={markdown} />
      </div>    
    );  
  }
};

export default HomePage;