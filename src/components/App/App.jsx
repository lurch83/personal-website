import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import HomePage from '../HomePage/HomePage';

const Container = styled.div`
  width: 100%;
  max-width: 75rem;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;  
`;

const Box = styled.div`
  background-color: #eee;
  margin-top: 20px;
  padding: 20px;  
  -moz-box-shadow: 0 0 3px #ccc;
  -webkit-box-shadow: 0 0 3px #ccc;
  box-shadow: 0 0 5px #ccc;
`;

class App extends Component {
  render() {
    return (      
        <div className="App">
          <Container>
            <Box>
              <h1>Andrew Doyle</h1>
              <div>A somewhat tale blood, sweat and software development.</div>
            </Box>
            <HomePage />            
          </Container>

        </div>
      
    );
  }
}

export default App;
