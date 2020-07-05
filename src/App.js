import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from "./views/home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
            <Route exact={true} path='/' render={() => (
                <Home />
            )}/>
          </Switch>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
