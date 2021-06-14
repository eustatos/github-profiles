import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import { clearProfileError, getProfile } from '../../actions/profile';

const styles = theme => ({
    margin: {
        margin: theme.spacing(1)
    },
    form: {
        maxWidth: '400px',
        minHeight: '120px',
        margin: 'auto',
        marginTop: '100px'
    },
    buttonContainer: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignSelf: 'flex-end'
    }
});

const initState = {
    username: ''
};

class Profile extends React.PureComponent {
    constructor() {
        super();
        this.state = initState;
    }

    handleOnClickButton = () => {
        const { getProfile } = this.props;
        getProfile(this.state);
    }

    handleOnChangeField = e => {
        const { clearProfileError, error } = this.props;
        this.setState({
            username: e.target.value
        });
        if (error) {
            clearProfileError();
        }
    }

    render() {
        const { classes, error, isLoading } = this.props;
        const { username } = this.state;

        return (
            <Container>
                <Grid
                    className={classes.form}
                    container
                    direction="column"
                    justify="space-between"
                    alignItems="stretch"
                >
                    <Grid item className={classes.margin}>
                        <TextField
                            error={!!error}
                            helperText={error}
                            fullWidth
                            id="username"
                            label="username"
                            type="text"
                            autoFocus
                            onChange={e => this.handleOnChangeField(e, 'username')}
                            required
                            value={username}
                        />
                    </Grid>
                    <Grid item className={classes.buttonContainer}>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={this.handleOnClickButton}
                            disabled={isLoading}
                        >
                            Get profile
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    error: state.profileReducer.error,
    isLoading: state.profileReducer.isLoading
});

const mapDispatchToProps = {
    clearProfileError,
    getProfile
};

const styledProfile = withStyles(styles)(Profile);
const profileContainer = connect(mapStateToProps, mapDispatchToProps)(styledProfile);

export default profileContainer;
