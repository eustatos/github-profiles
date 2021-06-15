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
        minWidth: 650
    }
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const columns = [
    'Name',
    'Language',
    'Description',
    'Stars'
]

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ProfileTable({ repos }) {
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
                    { repos
                        .filter(repo => !repo.private)
                        .map(repo => (
                            <TableRow key={repo.name}>
                                <TableCell component="th">{repo.name}</TableCell>
                                <TableCell>{repo.language}</TableCell>
                                <TableCell>{repo.description}</TableCell>
                                <TableCell>{repo.stargazers_count}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}
