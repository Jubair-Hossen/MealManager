import React from 'react';
import { Avatar, Box, Button, Divider, Menu, MenuItem, Stack, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './CustomStyle.css'
import { ManageAccounts } from '@mui/icons-material';

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

    return (
        <Box sx={{ ...navStyle }} component={'header'}>
            <Stack component={'nav'} spacing={24} direction='row' justifyContent='space-between' sx={{ py: 2, px: { xs: 1, md: 4 } }}>
                <Stack direction='row' spacing={1} alignItems='center' to='/' component={Link}>
                    <Typography variant="h6" component={'p'}>
                        <ManageAccounts />
                    </Typography>
                    <Typography variant="h6">
                        MealManager
                    </Typography>
                </Stack>
                <TextField size='small' sx={{ display: { xs: 'none', md: 'block' } }} fullWidth label="Search Member" id="fullWidth" />
                <Box>
                    <Avatar sx={{ cursor: 'pointer' }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Box>
            </Stack>
            <Divider />

            {/* <div>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    sx={{ mt: 1 }}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div> */}
        </Box>
    );
};

export default TopBar;