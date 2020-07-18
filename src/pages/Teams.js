import React, { Component } from 'react'
import axios from 'axios';

import TeamsTable from '../components/tables/TeamsTable';
// MUI
import Container from '@material-ui/core/Container';


class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          teams: []
        };
    }

    componentDidMount() {
        axios.get('/teams')
            .then(res => {
                this.setState({
                    isLoaded: true,
                    teams : res.data.teams
                });
            })
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });
    }

    render() {
        const { error, isLoaded, teams } = this.state;
        let teamsMarkup = isLoaded? (
            <TeamsTable teams={teams}></TeamsTable>
        ) : (
            <div>Loading...</div>
        )

        if (error) {
            return <div>Error: {error.message}</div>;
        } else {
            return (
                <Container maxWidth="md">
                    {teamsMarkup}
                </Container>
            )
        }
    }
}

export default Teams;
