import React from 'react';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    margin: {
        margin: theme.spacing(2)
    }
});

class UserProfile extends React.PureComponent {
    render() {
        const { classes } = this.props;

        return (
            <Paper
                style={{ margin: 'auto' }}
                variant="outlined"
            >
                <div className={classes.margin}>
                    UserProfile
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(UserProfile);
