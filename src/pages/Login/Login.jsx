import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';

import { clearAuthError, getSession, verifyAuth } from '../../actions/login';

const styles = theme => ({
    margin: {
        margin: theme.spacing(1)
    },
    container: {
        display: 'flex',
        height: '100vh'
    },
    form: {
        margin: 'auto',
        maxWidth: '400px',
        minHeight: '200px'
    },
    buttonContainer: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignSelf: 'flex-end'
    }
});

const initState = {
    password: '',
    username: ''
};

class Login extends React.PureComponent {
    constructor() {
        super();
        this.state = initState;
    }

    handleOnClickButton = () => {
        const { verifyAuth } = this.props;
        verifyAuth(this.state);
    }

    handleOnChangeField = (e, field) => {
        const { clearAuthError, error } = this.props;
        this.setState({
            [field]: e.target.value
        });
        if (error) {
            clearAuthError();
        }
    }

    componentDidMount = () => {
        const { getSession } = this.props;
        getSession();
    }

    render() {
        const { classes, error, isSent } = this.props;
        const { password, username } = this.state;

        return (
            <Container className={classes.container}>
                <Grid
                    className={classes.form}
                    container
                    direction="column"
                    justify="space-between"
                    alignItems="stretch"
                >
                    <Grid
                        container
                        direction="column"
                        alignItems="stretch"
                    >
                        <Grid item className={classes.margin}>
                            <TextField
                                error={!!error}
                                fullWidth
                                id="username"
                                label="Username"
                                type="email"
                                autoFocus
                                onChange={e => this.handleOnChangeField(e, 'username')}
                                required
                                value={username}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <AccountCircle />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item className={classes.margin}>
                            <TextField
                                error={!!error}
                                fullWidth
                                helperText={error}
                                id="password"
                                label="Password"
                                type="password"
                                onChange={e => this.handleOnChangeField(e, 'password')}
                                required
                                value={password}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Lock />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item className={classes.buttonContainer}>
                        <Button
                            variant="outlined"
                            color="primary"
                            style={{ margin: 'auto', textTransform: 'none' }}
                            onClick={this.handleOnClickButton}
                            disabled={isSent}
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    error: state.loginReducer.error,
    isSent: state.loginReducer.isSent
});

const mapDispatchToProps = {
    clearAuthError,
    getSession,
    verifyAuth
};

const styledLogin = withStyles(styles)(Login);
const loginContainer = connect(mapStateToProps, mapDispatchToProps)(styledLogin);

export default loginContainer;
