import React from 'react';
import { Link } from 'react-router-dom';

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
        minWidth: 450,
        maxWidth: 700
    }
});

const columns = [
    'Name',
    'Language',
    'Description',
    'Stars'
];

export default function RepoTable({ error, repos }) {
    const classes = useStyles();

    if (error) {
        return <Typography variant="h5">{ error }</Typography>;
    }
    if (repos.length === 0) {
        return <Typography variant="h5">No repos</Typography>;
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
                            <TableRow
                                key={repo.name}
                                hover
                            >
                                <TableCell component="th">
                                    <Link to={`/repo/${repo.name}`}>
                                        {repo.name}
                                    </Link>
                                </TableCell>
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
