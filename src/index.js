import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link} from 'react-router-dom';
import App from './components/App/App';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About.jsx';
import './index.css';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 75rem;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;  
`;


ReactDOM.render(  
  <HashRouter>
    <Container>
      <Header />
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
    </Container>
  </HashRouter>
  , document.getElementById('root')
);
