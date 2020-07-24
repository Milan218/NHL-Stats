import React , { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import axios from 'axios';

// MUI
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange
} from "@material-ui/core/colors";
import SwitchUI from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// components
import Navbar from './layout/Navbar';
import Teams from './pages/Teams';

axios.defaults.baseURL= 'https://statsapi.web.nhl.com/api/v1'; 


const useStyles = makeStyles(theme => ({
    container: {
      margin: '80px auto',
    }
}));


function App() {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];

  const theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };
  
  const switchUI = <SwitchUI checked={darkState} onChange={handleThemeChange} />


  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar switchUI={switchUI}/>
        <div className={classes.container}>
          <Switch>
            <Route exact path="/teams" component={Teams}/>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
