import React, { useState } from 'react';
import { Box, Button, Divider, Paper, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { LoadingButton } from '@mui/lab';


const SignUp = () => {

    const defaulValue = {
        fullName: '',
        email: '',
        pass: '',
        confirmPass: ''
    }

    const [data, setData] = useState(defaulValue);
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [user1, userLoading] = useAuthState(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    }

    useEffect(() => {
        if (user1) {
            navigate('/')
        }
    }, [user1, navigate])

    if (userLoading) {
        return <h1>Loading...</h1>
    }

    const handleSubmit = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(data.email, data.pass);
        e.target.reset();
    }

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
                    Sign Up
                </Typography>
                <TextField
                    placeholder='Full Name'
                    variant='outlined'
                    size='small'
                    fullWidth
                    name='fullName'
                    onChange={handleChange}
                    helperText='this field is required'
                />
                <TextField
                    fullWidth
                    placeholder='Email Address'
                    size='small'
                    name='email'
                    onChange={handleChange}

                />
                <TextField
                    fullWidth
                    placeholder='Password'
                    size='small'
                    type='password'
                    name='pass'
                    onChange={handleChange}

                />
                <TextField
                    fullWidth
                    placeholder='Confirm Password'
                    size='small'
                    type='password'
                    name='confirmPass'
                    onChange={handleChange}

                />

                <LoadingButton
                    loading={loading}
                    disabled={false}
                    type='submit'
                    variant='contained'
                    disableElevation
                >
                    Sign Up
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
            </Paper>
        </Box >
    );
};

export default SignUp;