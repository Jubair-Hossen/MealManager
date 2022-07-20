import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@mui/material';
import DepositeRow from './DepositeRow';

function createData(name, deposite) {
    return {
        name,
        deposite,
        history: [
            {
                date: 'Jan 1',
                amount: '1000',
            },
            {
                date: 'Jan 8',
                amount: '500',
            },
            {
                date: 'Jan 15',
                amount: '100',
            },
        ],
    };
}

const rows = [
    createData('Masud', 1500),
    createData('Sakil', 1600),
    createData('Jubair', 1550),
    createData('Himel', 1620),
    createData('Hridoy', 1700),
];

export default function DepositeTable() {
    return (
        <Box flex='3' p={1} mt={2}>
            <Typography variant="h6" gutterBottom component="div">
                Meals Details
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table" sx={{ width: '100%' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Details</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Total Deposite</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <DepositeRow key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
