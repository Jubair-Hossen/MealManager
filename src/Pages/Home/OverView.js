import React from 'react';
import { Box, Grid, Paper, styled, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import HomeLoading from './HomeLoading';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#fff',
}));
const Graph = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f1f1f1',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: '6px',
    color: theme.palette.text.secondary,
}));
const OverView = () => {
    const data = [
        {
            date: 'jan 1',
            mealRate: 19.50,
            bajar: 800,
        },
        {
            date: 'jan 2',
            mealRate: 17.20,
            bajar: 600,
        },
        {
            date: 'jan 3',
            mealRate: 22,
            bajar: 900,
        },
        {
            date: 'jan 4',
            mealRate: 18.10,
            bajar: 700,
        },
        {
            date: 'jan 5',
            mealRate: 19.80,
            bajar: 800,
        },
        {
            date: 'jan 6',
            mealRate: 20.05,
            bajar: 820,
        },
        {
            date: 'jan 7',
            mealRate: 16,
            bajar: 500,
        },
    ];
    const loading = false;

    if (loading) {
        return (
            <HomeLoading />
        );
    }
    return (
        <Box flex='3' p={1} mt={2}>
            <Typography variant="h6" gutterBottom component="p">
                Meal Overview
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Item>
                            <Typography variant="h6" component="p">
                                Total Meals
                            </Typography>
                            <Typography variant="p" gutterBottom component="p">
                                1204.50
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <Typography variant="h6" component="p">
                                Total Cost
                            </Typography>
                            <Typography variant="p" gutterBottom component="p">
                                34090 &#x09F3;
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <Typography variant="h6" component="p">
                                Meal Rate
                            </Typography>
                            <Typography variant="p" gutterBottom component="p">
                                20 &#x09F3;
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <Typography variant="h6" component="p">
                                Meal Ballance
                            </Typography>
                            <Typography variant="p" gutterBottom component="p">
                                3000 &#x09F3;
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom component="p" mt={3}>
                            Meal Rate Graph (7days)
                        </Typography>
                        <Graph>
                            <ResponsiveContainer width={'100%'} height={300}>
                                <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: -15 }}>
                                    <Line type="monotone" dataKey="mealRate" stroke="#8884d8" />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend></Legend>
                                </LineChart>
                            </ResponsiveContainer>
                        </Graph>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom component="div" mt={3}>
                            Meal Cost Graph (7days)
                        </Typography>
                        <Graph>
                            <ResponsiveContainer width={'100%'} height={300}>
                                <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: -10 }}>
                                    <Line type="monotone" dataKey="bajar" stroke="#8884d8" />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend></Legend>
                                </LineChart>
                            </ResponsiveContainer>
                        </Graph>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
};

export default OverView;