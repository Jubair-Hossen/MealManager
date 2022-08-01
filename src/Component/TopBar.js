import React from 'react';
import { Avatar, Box, Button, Divider, Menu, MenuItem, Stack, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './CustomStyle.css'
import { ManageAccounts } from '@mui/icons-material';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';

const navStyle = {
    position: 'sticky',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: '500',
    background: 'white',
    '&::after': {
        content: '""',
        display: 'block',
        clear: 'both',
    }
}

const TopBar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleSignOut = () => {
        handleClose();
        signOut(auth);
    }

    return (
        <>
            <Box sx={{ ...navStyle }} component={'header'}>
                <Stack component={'nav'} direction='row' justifyContent='space-between' sx={{ py: { xs: 1, md: 2 }, px: { xs: 1, md: 4 } }}>
                    <Stack direction='row' spacing={1} alignItems='center' to='/' component={Link}>
                        <Typography variant="h6" component={'p'}>
                            <ManageAccounts />
                        </Typography>
                        <Typography variant="h6">
                            MealManager
                        </Typography>
                    </Stack>
                    <Box>
                        <Avatar
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{ cursor: 'pointer' }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Box>
                </Stack>
                <Divider />
            </Box>

            <Menu
                id="basic-menu"
                sx={{ mt: 1 }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleSignOut}>Logout</MenuItem>
            </Menu>
        </>
    );
};

export default TopBar;