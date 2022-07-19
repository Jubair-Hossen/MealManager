import { Stack } from '@mui/material';
import React from 'react';
import Sidebar from '../../Component/Sidebar';
import MemberTable from './MemberTable';

const Members = () => {
    return (
        <Stack direction='row' justifyContent='space-between' sx={{ marginBottom: { xs: 8, md: 1 } }}>
            <Sidebar />
            <MemberTable />
        </Stack>
    );
};

export default Members;