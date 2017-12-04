import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={UserList}/>
      <Route path="/user/:id" component={UserDetails}/>
    </div>
  </Router>
)

export default App;
