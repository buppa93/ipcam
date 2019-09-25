import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeComponent from './components/HomeComponent';

function App() {
  return (
    <Router>
      <Route
        exact path='/'
        render={props => <HomeComponent {...props} />}
      />
      <Route
        path='/cam'
        render={props => <HomeComponent {...props} />}
      />
    </Router>
  );
}

export default App;
