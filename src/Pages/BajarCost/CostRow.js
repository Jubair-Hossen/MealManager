import React, { useState } from 'react';
import { Delete, ModeEdit } from '@mui/icons-material';
import { IconButton, Stack, styled } from '@mui/material';
import { LoadingButton } from '@mui/lab';

const CostRow = () => {

    const [loading, setLoading] = useState(false);
    const handleDelete = () => {
        setLoading(true)
    }

    const Mytr = styled('tr')({
        ":nth-of-type(even)": {
            backgroundColor: '#ddd'
        }
    })

    const Mytd = styled('td')({
        border: '1px solid #f1f1f1',
        textAlign: 'left',
        padding: '8px'
    })

    return (
        <Mytr>
            <Mytd>Jan 1</Mytd>
            <Mytd>Masud</Mytd>
            <Mytd>800</Mytd>
            <Mytd sx={{ width: '20%' }}>
                <Stack direction='row'>
                    <IconButton size='small' aria-label="delete" color="primary">
                        <ModeEdit />
                    </IconButton>
                    <LoadingButton
                        size='small'
                        onClick={handleDelete}
                        loading={loading}
                        loadingPosition="start"
                        startIcon={<Delete />}
                        variant="text"
                    ></LoadingButton>
                </Stack>
            </Mytd>
        </Mytr>
    );
};

export default CostRow;