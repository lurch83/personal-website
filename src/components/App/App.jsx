import React, { Component } from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Box from '../Box/Box';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';

//TODO: Move this Container
const Container = styled.div`
  width: 100%;
  max-width: 75rem;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;  
`;

class App extends Component {
  render() {
    return (         
      <HashRouter>
        <Container>
          <Header />
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
        </Container>
      </HashRouter>
    );
  }
}

export default App;
