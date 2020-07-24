import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import axios from 'axios';

// MUI
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import themeFile from './util/theme';

// components
import Navbar from './layout/Navbar';
import Teams from './pages/Teams';

axios.defaults.baseURL= 'https://statsapi.web.nhl.com/api/v1'; 

const theme = createMuiTheme(themeFile);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/teams" component={Teams}/>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
