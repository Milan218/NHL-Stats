import React, { Component } from 'react';
import PropTypes from 'prop-types';

// MUI
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


class TeamsTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: this.props.teams,
            isAsc : true,
        };
        this.onSort = this.onSort.bind(this)
    }

    onSort(event, sortKey){
        const data = this.state.data;
        sortKey = sortKey.split('.');
        console.log(sortKey);
        console.log(sortKey.length);
        if(this.state.isAsc) {
            this.setState({isAsc: false});
            data.sort((a,b) => {
                for(let i = 0; i < sortKey.length; i++) {
                    a = a[sortKey[i]];
                    b = b[sortKey[i]];
                }
                return (a > b) ? 1 : -1;
            });
        } else {
            this.setState({isAsc: true});
            data.sort((a,b) => {
                for(let i = 0; i < sortKey.length; i++) {
                    a = a[sortKey[i]];
                    b = b[sortKey[i]];
                }
                return (a > b) ? -1 : 1;
            });
        }

        this.setState({data})
    }

    render() {
        const teams = this.state.data;
        return (
            <Paper>
                <TableContainer style={{maxHeight: '80vh'}}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Tooltip title="Sort" placement='top'>
                                        <Button variant='contained' color='primary' onClick={(event) => this.onSort(event, 'abbreviation')}>Abbreviation</Button>
                                    </Tooltip>
                                </TableCell>

                                <TableCell>
                                    <Tooltip title="Sort" placement='top'>
                                        <Button variant='contained' color='primary' onClick={(event) => this.onSort(event, 'name')}>Name</Button>
                                    </Tooltip>
                                </TableCell>

                                <TableCell>
                                    <Tooltip title="Sort" placement='top'>
                                        <Button variant='contained' color='primary' onClick={(event) => this.onSort(event, 'conference.name')}>Conference</Button>
                                    </Tooltip>
                                </TableCell>

                                <TableCell>
                                    <Tooltip title="Sort" placement='top'>
                                        <Button variant='contained' color='primary' onClick={(event) => this.onSort(event, 'division.name')}>Division</Button>
                                    </Tooltip>
                                </TableCell>

                                <TableCell>
                                    <Tooltip title="Sort" placement='top'>
                                        <Button variant='contained' color='primary' onClick={(event) => this.onSort(event, 'firstYearOfPlay')}>Debut</Button>
                                    </Tooltip>
                                </TableCell>
                                
                                <TableCell>
                                    <Tooltip title="Sort" placement='top'>
                                        <Button variant='contained' color='primary' onClick={(event) => this.onSort(event, 'venue.name')}>Stadium</Button>
                                    </Tooltip>
                                </TableCell>
                                
                                <TableCell>
                                    <Tooltip title="Sort" placement='top'>
                                        <Button variant='contained' color='primary' onClick={(event) => this.onSort(event, 'website')}>Website</Button>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {teams.map((team) => (
                            <TableRow key={team.id}>
                                <TableCell>{team.abbreviation}</TableCell>
                                <TableCell>{team.name}</TableCell>
                                <TableCell>{team.conference.name}</TableCell>
                                <TableCell>{team.division.name}</TableCell>
                                <TableCell>{team.firstYearOfPlay}</TableCell>
                                <TableCell>{team.venue.name}</TableCell>
                                <TableCell><Link color ='primary'href={team.officialSiteUrl}>{team.officialSiteUrl}</Link></TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            
          );
    }
}

TeamsTable.propTypes = {
    teams : PropTypes.array.isRequired,
}

export default TeamsTable;