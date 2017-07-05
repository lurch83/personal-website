import React from 'react';
import ReactMarkdown from 'react-markdown';
import someBlogPost from '../../blog/some-blog-post.md'

export const HomePage = () => {
  return(
    <div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>  
      <h3>Blog</h3>
      <ReactMarkdown source={someBlogPost} />
    </div>    
  );  
};

export default HomePage;