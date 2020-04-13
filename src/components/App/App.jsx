import React, { Component } from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import About from '../About/About';
import BlogItem from '../BlogItem/BlogItem';
import NotFound from '../Main/NotFound';

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
      <BrowserRouter>
        <div>
            <Route path="/" component={Nav} />
            <Container>
              <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/blog" component={Main} />                                          
                <Route exact path="/blog/:file" component={BlogItem} />     
                <Route component={NotFound} />         
              </Switch>
            </Container>        
        </div>       
      </BrowserRouter>
    );
  }
}

export default App;
