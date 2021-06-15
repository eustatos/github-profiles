import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});

const columns = [
    'Name',
    'Language',
    'Description',
    'Stars'
];

export default function ProfileTable({ error, repos }) {
    const classes = useStyles();

    if (error) {
        return <Typography variant="h5" component="h2">{ error }</Typography>;
    }
    if (repos.length === 0) {
        return <Typography variant="h5" component="h2">No repos</Typography>;
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="medium">
                <TableHead>
                    <TableRow>
                        { columns.map(column => (
                            <TableCell key={column}>{ column }</TableCell>
                        )) }
                    </TableRow>
                </TableHead>
                <TableBody>
                    { repos
                        .filter(repo => !repo.private)
                        .map(repo => (
                            <TableRow key={repo.name}>
                                <TableCell component="th">{repo.name}</TableCell>
                                <TableCell>{repo.language}</TableCell>
                                <TableCell>{repo.description}</TableCell>
                                <TableCell>{repo.stargazers_count}</TableCell>
                            </TableRow>
                        )) }
                </TableBody>
            </Table>
        </TableContainer>
    );
}
