import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@mui/material';
import MemberRow from './MemberRow';

function createData(name, meals) {
    return {
        name,
        meals,
        history: [
            {
                details: 'Total Meals',
                amount: '65',
            },
            {
                details: 'Total Meal Cost',
                amount: '1300',
            },
            {
                details: 'Electicity Bill',
                amount: '50',
            },
            {
                details: 'Others',
                amount: '200',
            },
            {
                details: 'Total Cost',
                amount: '1550',
            },
            {
                details: 'Total Deposite',
                amount: '1700',
            },
            {
                details: 'Remaining Ballance',
                amount: '150',
            },
        ],
    };
}

const rows = [
    createData('Masud', 65),
    createData('Sakil', 72),
    createData('Jubair', 54),
    createData('Himel', 55.5),
    createData('Hridoy', 59.5),
];

export default function MemberTable() {
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
                            <TableCell align="right">Total Meals</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <MemberRow key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
