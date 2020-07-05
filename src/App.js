import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from "./views/home"
import About from "./views/about"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
            <Route exact={true} path='/' render={() => (
                <Home />
            )}/>
            <Route exact={true} path='/about' render={() => (
              <About />
            )}/>
          </Switch>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
