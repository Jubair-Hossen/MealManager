import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Divider, Paper, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab'
import { Google } from '@mui/icons-material';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignIn = () => {

    const defaulValue = {
        email: '',
        pass: ''
    }

    const [data, setData] = useState(defaulValue);
    const [passError, setPassError] = useState(false);
    const req = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    const emailReq = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    const handleChange = e => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    }

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [user1, userLoading] = useAuthState(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        if (emailReq.test(data.email)) {
            setPassError(false);
            signInWithEmailAndPassword(data.email, data.pass);
            e.target.reset();
        }
        else {
            setPassError(true)
        }

    }

    useEffect(() => {
        if (user1) {
            navigate('/')
        }
    }, [user1, navigate])

    return (
        <Box maxWidth='sm' m='20px auto' p={1}>
            <Paper
                sx={{
                    padding: 3,
                    '& .MuiTextField-root': { mb: 2 }
                }}
                component='form'
                onSubmit={handleSubmit}
            >
                <Typography variant='h6' sx={{ textAlign: 'center', mb: 3 }}>
                    Log In
                </Typography>
                <TextField
                    error={passError}
                    fullWidth
                    placeholder='Email Address'
                    size='small'
                    name='email'
                    onChange={handleChange}
                    helperText={passError && 'Invalid Email'}
                />
                <TextField
                    fullWidth
                    placeholder='Password'
                    size='small'
                    type='password'
                    name='pass'
                    onChange={handleChange}
                />

                <LoadingButton
                    loading={loading}
                    disabled={false}
                    type='submit'
                    variant='contained'
                    disableElevation
                >
                    Log In
                </LoadingButton>

                <Divider sx={{ mt: 2 }}>
                    or
                </Divider>
                <Button
                    sx={{ width: '100%', mt: 2 }}
                    variant='outlined'
                    startIcon={<Google />}
                    onClick={() => signInWithGoogle()}
                >Continue with google</Button>
                {
                    error && <p>{error.message}</p>
                }
            </Paper>
        </Box >
    );
};

export default SignIn;