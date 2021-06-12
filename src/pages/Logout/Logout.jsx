import React from 'react';
import { Redirect } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

class Logout extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            redirect: false
        };
    }

    handleOnClickButton = () => this.setState({ redirect: true });

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to={{ pathname: '/login' }} />;
        }

        return (
            <Paper
                style={{ margin: 'auto' }}
                variant="outlined"
            >
                <Button
                    variant="outlined"
                    color="primary"
                    style={{ textTransform: 'none' }}
                    onClick={this.handleOnClickButton}
                >
                    Logout
                </Button>
            </Paper>
        );
    }
}

export default Logout;
