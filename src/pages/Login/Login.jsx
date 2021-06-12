import React from 'react';
import { Redirect } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import { withStyles } from '@material-ui/core/styles';

import { HELPER_TEXT, PASSWORD, USERNAME } from '../../constants/login';

const styles = theme => ({
    margin: {
        margin: theme.spacing(2)
    }
});

const initState = {
    error: false,
    helperText: '',
    password: '',
    redirect: false,
    username: ''
};

class Login extends React.PureComponent {
    constructor() {
        super();
        this.state = initState;
    }

    handleOnClickButton = () => {
        const { password, username } = this.state;

        if (username === USERNAME && password === PASSWORD) {
            this.setState({ redirect: true });
            return;
        }
        this.setState({
            ...initState,
            error: true,
            helperText: HELPER_TEXT
        });
    }

    handleOnChangeField = (e, field) => {
        console.log(field, 'e.target.value', e.target.value);

        this.setState({
            error: false,
            helperText: '',
            [field]: e.target.value
        });
    }

    render() {
        const { classes } = this.props;
        const {
            error,
            helperText,
            password,
            username,
            redirect
        } = this.state;

        if (redirect) {
            return <Redirect to={{ pathname: '/logout' }} />;
        }

        return (
            <Paper
                style={{ margin: 'auto' }}
                variant="outlined"
            >
                <div className={classes.margin}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <TextField
                                error={error}
                                id="username"
                                label="Username"
                                type="email"
                                autoFocus
                                onChange={e => this.handleOnChangeField(e, 'username')}
                                required
                                style={{ width: '100%' }}
                                value={username}
                            />
                        </Grid>
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <TextField
                                error={error}
                                helperText={helperText}
                                id="password"
                                label="Password"
                                type="password"
                                onChange={e => this.handleOnChangeField(e, 'password')}
                                required
                                style={{ width: '100%' }}
                                value={password}
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
                            onClick={this.handleOnClickButton}
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
