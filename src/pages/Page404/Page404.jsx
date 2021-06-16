import React from 'react';
import { Redirect } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import BackButton from '../../components/back-button/back-button';

const styles = () => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20vh',
        width: '50vh'
    },
    button: {
        marginTop: 20
    }
});

class Page404 extends React.PureComponent {
    render() {
        const { classes } = this.props;
        return (
            <Container
                className={classes.container}
            >
                <Paper className={classes.paper}>
                    <Typography component="h1">
                        Error 404. Page not found.
                    </Typography>
                    <div className={classes.button}>
                        <BackButton
                            path=""
                            text="Back to main page"
                        />
                    </div>
                </Paper>
            </Container>
        );
    }
}

const styledPage404 = withStyles(styles)(Page404);

export default styledPage404;
