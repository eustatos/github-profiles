import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CommitTable from '../../components/commit-table';
import { getCommits } from '../../actions/repo';
import BackButton from '../../components/back-button/back-button';

const styles = () => ({
    button: {
        marginTop: 30,
        textAlign: 'center'
    },
    container: {
        minHeight: 120,
        marginTop: 50
    },
    title: {
        marginBottom: 30
    }
});

class Repo extends React.PureComponent {
    componentDidMount = () => {
        const { getCommits, match, username } = this.props;
        if (!username) {
            return;
        }
        const { id } = match.params;
        getCommits(id, username);
    }

    render() {
        const {
            classes,
            commits,
            match,
            username
        } = this.props;

        if (!username) {
            return <Redirect to="/" />;
        }

        return (
            <Container spacing={2}>
                <Grid
                    className={classes.container}
                    container
                    direction="column"
                    justify="center"
                >
                    <Grid item className={classes.title}>
                        <Typography variant="h5" component="h2">
                            { match.params.id }
                        </Typography>
                    </Grid>
                    <Grid item>
                        <CommitTable commits={commits} />
                    </Grid>
                    <Grid item className={classes.button}>
                        <BackButton path="" text="Back to Profile" />
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    username: state.profileReducer.username,
    commits: state.repoReducer.commits
});

const mapDispatchToProps = {
    getCommits
};

const styledRepo = withStyles(styles)(Repo);
const repoContainer = connect(mapStateToProps, mapDispatchToProps)(styledRepo);

export default repoContainer;
