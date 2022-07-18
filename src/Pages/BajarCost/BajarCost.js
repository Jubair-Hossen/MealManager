import { Stack } from '@mui/material';
import React from 'react';
import Sidebar from '../../Component/Sidebar';
import CostTable from './CostTable';

const BajarCost = () => {
    return (
        <Stack direction='row' justifyContent='space-between' sx={{ marginBottom: { xs: 8, md: 1 } }}>
            <Sidebar />
            <CostTable />
        </Stack>
    );
};

export default BajarCost;