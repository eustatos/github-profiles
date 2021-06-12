import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    margin: {
        margin: theme.spacing(2)
    }
});

class Login extends React.PureComponent {
    render() {
        const { classes } = this.props;

        return (
            <Paper
                style={{ margin: 'auto' }}
                variant="outlined"
            >
                <div className={classes.margin}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <TextField
                                id="username"
                                label="Username"
                                type="email"
                                autoFocus
                                required
                                style={{ width: '100%' }}
                            />
                        </Grid>
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <TextField
                                id="password"
                                label="Password"
                                type="password"
                                required
                                style={{ width: '100%' }}
                            />
                        </Grid>
                        <Grid item>
                            <Lock />
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '20px' }}>
                        <Button
                            variant="outlined"
                            color="primary"
                            style={{ textTransform: 'none' }}
                        >
                            Login
                        </Button>
                    </Grid>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(Login);
