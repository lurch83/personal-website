import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import About from '../About/About';
import BlogItem from '../BlogItem/BlogItem';

//TODO: Move this Container
const Container = styled.div`
  width: 100%;
  max-width: 75rem;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;  
`;

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (         
      <BrowserRouter>
        <div>
            <Route path="/" component={Nav} />
            <Container>
              <Route exact path="/" component={Main} />
              <Route path="/about" component={About} />
              <Route path="/blog/:file" component={BlogItem} />              
            </Container>        
        </div>       
      </BrowserRouter>
    );
  }
}

export default App;
