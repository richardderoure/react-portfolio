import React from 'react';
import './App.css';
import Navigation from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './components/portfolio';
function App() {
  return (
    <div className="App">
      <Navigation />
      <img className="bgimg" src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=full" alt="landscape"></img>
      
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
