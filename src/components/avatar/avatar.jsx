import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 200
    }
});

export default function ImgMediaCard({ login, name, src }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="profile avatar"
                    height="200"
                    image={src}
                    title="Avatar"
                />
                <CardContent>
                    <Typography variant="h5">
                        { name }
                    </Typography>
                    <Typography gutterBottom variant="h6">
                        { login }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
