import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Box from '../Box/Box';
import Header from '../Header/Header';
import Main from '../Main/Main';

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
            <Header />                     
            <Main />
          </Container>
        </div>
    );
  }
}

export default App;
