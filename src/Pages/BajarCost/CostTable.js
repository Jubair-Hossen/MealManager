import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import CostRow from './CostRow';

function createData(name, date, cost) {
    return { name, date, cost };
}

const rows = [
    createData('Masud', 'Jan 1', '800'),
    createData('Sakil', 'Jan 2', '800'),
    createData('Jubair', 'Jan 3', '800'),
    createData('Hridoy', 'Jan 4', '800'),
    createData('Himel', 'Jan 5', '800'),
    createData('Fahim', 'Jan 6', '800'),
];

export default function CostTable() {
    return (
        <Box flex='3' p={1} mt={2}>
            <Typography variant="h6" gutterBottom component="div">
                Meal Cost
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ width: '100%' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Cost</TableCell>
                            <TableCell align="right">Edit/Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <CostRow row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
