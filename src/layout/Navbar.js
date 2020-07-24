import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// MUI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

//Icons
import HomeIcon from '@material-ui/icons/Home';  

class Navbar extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar className='nav-container'>
                    <Button color='inherit' component={Link} to='/'>
                        <HomeIcon></HomeIcon>
                    </Button>
                    <Button color='inherit' component={Link} to='/teams'>Teams</Button>
                    {this.props.switchUI}
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar;
