import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import HomePage from '../HomePage/HomePage';
import Box from '../Box/Box';
import {Router, Match, Link} from 'react-router'

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
      <Router>      
        <div classNa45985522  me="App">
          <Container>
            <Box>
              <Link to="/"><h1>Andrew Doyle</h1></Link>
              <div>A somewhat tale blood, gears and software development.</div>
            </Box>            
            <div>
              <Match exactly pattern="/" component={HomePage} />            
            </div>            
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
