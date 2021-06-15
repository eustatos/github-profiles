import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function BackButton({ path, text }) {
    const [redirect, setRedirect] = useState(false);

    if (redirect) {
        return <Redirect to={`/${path}`} />;
    }
    return (
        <Button
            variant="outlined"
            color="primary"
            onClick={() => setRedirect(true)}
        >
            { text }
        </Button>
    );
}
