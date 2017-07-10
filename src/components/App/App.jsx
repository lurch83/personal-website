import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Box from '../Box/Box';

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
        <div className="App">
          <Container>
            <Box>
              <h1>Andrew Doyle</h1>
              <div>A somewhat tale blood, gears and software development.</div>
            </Box>            
                        
          </Container>
        </div>
    );
  }
}

export default App;
