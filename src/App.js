import React from 'react';
import './App.css';
import Navigation from "./components/navbar";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './components/portfolio';
import About from "./components/about"
import Home from "./components/home"

function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </BrowserRouter>
      
      {/* will create data object to inject data into 1 single call of portfolio */}
      <div className="card-container">
      <Portfolio />
      <Portfolio />
      <Portfolio />
      <Portfolio />
      <Portfolio />
      </div>
    </div>
  );
}

export default App;
