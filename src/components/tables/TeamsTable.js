import React, { Component } from 'react';
import PropTypes from 'prop-types';

// MUI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class TeamsTable extends Component {
    render() {
        const teams = this.props.teams;
        return (
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Abbreviation</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Conference</TableCell>
                    <TableCell>Division</TableCell>
                    <TableCell>First season</TableCell>
                    <TableCell>Stadium</TableCell>
                    <TableCell>Website</TableCell>
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
                      <TableCell><a href={team.officialSiteUrl}>{team.officialSiteUrl}</a></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
    }
}

TeamsTable.propTypes = {
    teams : PropTypes.array.isRequired,
}

export default TeamsTable;