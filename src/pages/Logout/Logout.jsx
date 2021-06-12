import React from 'react';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

class Logout extends React.PureComponent {
    render() {
        return (
            <Paper
                style={{ margin: 'auto' }}
                variant="outlined"
            >
                <Button
                    variant="outlined"
                    color="primary"
                    style={{ textTransform: 'none' }}
                >
                    Logout
                </Button>
            </Paper>
        );
    }
}

export default Logout;
