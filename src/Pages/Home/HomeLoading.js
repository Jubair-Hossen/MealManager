import { Box, Grid, Skeleton } from '@mui/material';
import React from 'react';

const HomeLoading = () => {
    return (
        <Box flex='3' p={1} mt={2}>
            <Skeleton variant="text" width={150} height={30} />
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Skeleton variant="rectangular" height={100} />
                </Grid>
                <Grid item xs={6}>
                    <Skeleton variant="rectangular" height={100} />
                </Grid>
                <Grid item xs={6}>
                    <Skeleton variant="rectangular" height={100} />
                </Grid>
                <Grid item xs={6}>
                    <Skeleton variant="rectangular" height={100} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Skeleton variant="text" width={150} height={30} />
                    <Skeleton variant="rectangular" height={300} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Skeleton variant="text" width={150} height={30} />
                    <Skeleton variant="rectangular" height={300} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomeLoading;