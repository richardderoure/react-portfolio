import React from 'react';
import './App.css';
import Navigation from "./components/navbar";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Portfolio from './components/portfolio';
import About from "./components/about"
import Home from "./components/home"
import Footer from "./components/footer"

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
      <Footer />

      
  
    </div>
  );
}

export default App;
