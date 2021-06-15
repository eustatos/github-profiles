import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 450
    }
});

const columns = [
    'Author',
    'Hash',
    'Date'
];

export default function CommitTable({ commits }) {
    const classes = useStyles();

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
                    { commits
                        .map(commit => (
                            <TableRow
                                key={commit.sha}
                                hover
                            >
                                <TableCell component="th">
                                    {commit.commit.author.name}
                                </TableCell>
                                <TableCell>{commit.sha}</TableCell>
                                <TableCell>{commit.commit.author.date}</TableCell>
                            </TableRow>
                        )) }
                </TableBody>
            </Table>
        </TableContainer>
    );
}
