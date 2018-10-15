import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/CustomNavbar';
import './App.css';
import ToDo from './components/ToDo/ToDo';
import CRUD from './components/CRUD/CRUD';
import CRUDPost from './components/CRUDPost/CRUDPost';
import Counter from './components/Counter/Counter';
import ShoppingList from './components/ShoppingList/ShoppingList';
import Weather from './components/Weather/Weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={ToDo} />
            <Route path="/crud" component={CRUD} />
            <Route path="/crud-post" component={CRUDPost} />
            <Route path="/counter" component={Counter} />
            <Route path="/shopping-list" component={ShoppingList} />
            <Route path="/weather" component={Weather} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;