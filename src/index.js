import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link} from 'react-router-dom';
import App from './components/App/App';
import HomePage from './components/HomePage/HomePage';
import './index.css';

ReactDOM.render(  
  <HashRouter>
    <div>
      <App />
      <Route exact path="/" component={HomePage} />

    </div>
  </HashRouter>
  , document.getElementById('root')
);
