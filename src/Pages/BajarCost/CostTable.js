import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import CostRow from './CostRow';

const Mytable = styled('table')({
    borderCollapse: 'collapse',
    width: '100%',
})

const Mytr = styled('tr')({
    ":nth-of-type(even)": {
        backgroundColor: '#ddd'
    }
})

const Myth = styled('th')({
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px'
})

const CostTable = () => {

    return (
        <Box flex='3' p={2}>
            <Typography variant="h6" gutterBottom component="div">
                Meal Cost
            </Typography>
            <Mytable>
                <thead>
                    <Mytr>
                        <Myth>Date</Myth>
                        <Myth>Name</Myth>
                        <Myth>Cost</Myth>
                        <Myth>Action</Myth>
                    </Mytr>
                </thead>
                <tbody>
                    <CostRow />
                    <CostRow />
                    <CostRow />
                    <CostRow />
                </tbody>
            </Mytable>
        </Box>
    );
};

export default CostTable;