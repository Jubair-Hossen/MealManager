import React from 'react';
import { Box, Grid, Paper, styled } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f1f1f1',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
    return (
        <Box flex='3' p={1}>
            <h2>Meal Over View</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Item>
                            <h3>Total Meals</h3>
                            <p>1204.50</p>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <h3>Total Cost</h3>
                            <p>24090 tk</p>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <h3>Meal Rate</h3>
                            <p>20 tk</p>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <h3>Meal Ballance</h3>
                            <p>200000 tk</p>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <h2>Meal Rate Graph (7days)</h2>
                        <Graph>
                            <ResponsiveContainer width={'100%'} height={300}>
                                <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
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
                        <h2>Bajar Cost Graph (7days)</h2>
                        <Graph>
                            <ResponsiveContainer width={'100%'} height={300}>
                                <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
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