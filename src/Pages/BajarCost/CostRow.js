import React, { useState } from 'react';
import { Delete, ModeEdit } from '@mui/icons-material';
import { IconButton, Stack, TableCell, TableRow } from '@mui/material';
import { LoadingButton } from '@mui/lab';

const CostRow = ({ row }) => {

    const [loading, setLoading] = useState(false);
    const handleDelete = () => {
        setLoading(true)
    }
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {row.name}
            </TableCell>
            <TableCell align="right">{row.date}</TableCell>
            <TableCell align="right">{row.cost} &#2547;</TableCell>
            <TableCell align="right" sx={{ width: '25%' }}>
                <Stack direction={row} justifyContent='end'>
                    <IconButton aria-label="delete">
                        <ModeEdit />
                    </IconButton>
                    <LoadingButton
                        onClick={handleDelete}
                        loading={loading}
                        loadingPosition="start"
                        startIcon={<Delete />}
                        variant="text"
                    >
                    </LoadingButton>
                </Stack>
            </TableCell>
        </TableRow>
    );
};

export default CostRow;