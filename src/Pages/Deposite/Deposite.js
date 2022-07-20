import { Stack } from '@mui/material';
import React from 'react';
import Sidebar from '../../Component/Sidebar';
import DepositeTable from './DepositeTable';

const Deposite = () => {
    return (
        <Stack direction='row' justifyContent='space-between' sx={{ marginBottom: { xs: 8, md: 1 } }}>
            <Sidebar />
            <DepositeTable />
        </Stack>
    );
};

export default Deposite;