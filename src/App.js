import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import axios from 'axios';


// components
import Navbar from './layout/Navbar';
import Teams from './pages/Teams';

axios.defaults.baseURL= 'https://statsapi.web.nhl.com/api/v1'; 

function App() {
  return (
      <Router>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/teams" component={Teams}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
