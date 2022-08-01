import React, { useState } from 'react';
import { Delete, ModeEdit } from '@mui/icons-material';
import { CircularProgress, IconButton, Stack, TableCell, TableRow } from '@mui/material';


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
            <TableCell align="right" width={'20%'}>
                <Stack direction={row} justifyContent='end' alignItems='center'>
                    <IconButton aria-label="delete">
                        <ModeEdit />
                    </IconButton>
                    {
                        loading ?
                            <CircularProgress size={20} />
                            :
                            <IconButton onClick={handleDelete} aria-label="delete">
                                <Delete />
                            </IconButton>
                    }
                </Stack>
            </TableCell>
        </TableRow>
    );
};

export default CostRow;