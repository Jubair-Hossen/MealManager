import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Paid, Add, LocalGroceryStore, MenuBook } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <Box flex='1' p={1} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box position='fixed'>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem disablePadding to='/' component={Link}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Home />
                                </ListItemIcon>
                                <ListItemText primary="Over View" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding to='/mealcost' component={Link}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LocalGroceryStore />
                                </ListItemIcon>
                                <ListItemText primary="Meal Cost" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding to='/members' component={Link}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <MenuBook />
                                </ListItemIcon>
                                <ListItemText primary="Meal Details" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding to='/deposite' component={Link}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Paid />
                                </ListItemIcon>
                                <ListItemText primary="Deposits" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding to='/' component={Link}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Add />
                                </ListItemIcon>
                                <ListItemText primary="Add Meals" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Box>
        </Box>
    );
};

export default Sidebar;