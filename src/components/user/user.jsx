import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    container: {
    },
    button: {
        marginLeft: 20
    },
    user: {
        marginTop: 6
    }
});

const User = ({ classes, logout, user }) => {
    const handleOnClickButton = () => logout();

    return (
        <Grid
            className={classes.container}
            container
        >
            <Grid item className={classes.user}>
                <Typography>
                    { user }
                </Typography>
            </Grid>
            <Grid item className={classes.button}>
                <Button
                    variant="text"
                    color="primary"
                    style={{ textTransform: 'none' }}
                    onClick={handleOnClickButton}
                >
                    Logout
                </Button>
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(User);
