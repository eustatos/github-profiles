import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import RepoTable from '../../components/repo-table';
import Avatar from '../../components/avatar';
import { clearProfileError, getProfile } from '../../actions/profile';

const styles = theme => ({
    button: {
        marginTop: 10
    },
    container: {
        minHeight: 120,
        marginTop: 50
    },
    item: {
        padding: theme.spacing(2)
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
        const { username } = this.state;
        getProfile(username);
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
        const {
            classes,
            isLoading,
            profile,
            profileError,
            reposError,
            repos
        } = this.props;
        const { username } = this.state;

        return (
            <Container spacing={2}>
                <Grid
                    className={classes.container}
                    container
                    justify="center"
                >
                    <Grid item xs={12} md={3} sm={6} className={classes.item}>
                        <TextField
                            error={!!profileError}
                            helperText={profileError}
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
                    <Grid item xs={12} md={2} sm={3} className={classes.item}>
                        <Button
                            className={classes.button}
                            variant="outlined"
                            color="primary"
                            onClick={this.handleOnClickButton}
                            disabled={isLoading}
                        >
                            Get profile
                        </Button>
                    </Grid>
                </Grid>
                { profile && (
                    <Grid container justify="center">
                        <Grid item className={classes.item}>
                            <Avatar
                                name={profile.name}
                                login={profile.login}
                                src={profile.avatar_url}
                            />
                        </Grid>
                        <Grid item className={classes.item}>
                            <RepoTable repos={repos} error={reposError}/>
                        </Grid>
                    </Grid>
                ) }
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    profileError: state.profileReducer.profileError,
    reposError: state.profileReducer.reposError,
    isLoading: state.profileReducer.isLoading,
    profile: state.profileReducer.profile,
    repos: state.profileReducer.repos
});

const mapDispatchToProps = {
    clearProfileError,
    getProfile
};

const styledProfile = withStyles(styles)(Profile);
const profileContainer = connect(mapStateToProps, mapDispatchToProps)(styledProfile);

export default profileContainer;
