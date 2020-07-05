import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from "./views/home"
import About from "./views/about"
import CreateList from "./views/formView"
import CreatePlot from "./views/createPlot"

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
            <Route exact={true} path='/create' render={() => (
                <CreateList />
            )}/>
            <Route exact={true} path='/create2' render={() => (
                <CreatePlot />
            )}/>
          </Switch>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
