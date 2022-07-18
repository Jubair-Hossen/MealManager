import { Box, Stack } from '@mui/material';
import React from 'react';
import Sidebar from '../../Component/Sidebar';
import OverView from './OverView';

const Home = () => {
    return (
        <Stack direction='row' justifyContent='space-between'>
            <Sidebar />
            <OverView />
        </Stack>
    );
};

export default Home;