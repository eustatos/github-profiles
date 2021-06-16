import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import User from '../user';

const styles = () => ({
    container: {
        paddingTop: 20
    }
});

const Header = ({ classes, logout, user }) => (
    user ? (
        <Container>
            <Grid
                className={classes.container}
                container
                justify="space-between"
            >
                <Grid item />
                <Grid item>
                    <User user={user} logout={logout} />
                </Grid>
            </Grid>
        </Container>
    ) : null
);

export default withStyles(styles)(Header);
