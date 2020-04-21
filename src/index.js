import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom"
import './index.css';
import App from './App';
import About from "./components/about"
import Portfolio from "./components/portfolio"

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </Router>
   );
}
 
ReactDOM.render(<Routing />,
  document.getElementById('root')
);
