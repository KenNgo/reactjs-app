import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import News from './components/News';
import Weather from './components/Weather';
import Card from './components/Card';
import Navbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/weather" component={Weather} />
            <Route path="/news" component={News} />
            <Route path="/card" component={Card} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
