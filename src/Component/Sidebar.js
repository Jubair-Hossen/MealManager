import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Phone, Favorite, MenuBook, Widgets, LocalGroceryStore } from '@mui/icons-material';
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
                        <ListItem disablePadding to='/bajarcost' component={Link}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LocalGroceryStore />
                                </ListItemIcon>
                                <ListItemText primary="Bajar Cost" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding to='/hom' component={Link}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Favorite />
                                </ListItemIcon>
                                <ListItemText primary="Favorite" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding to='/meals' component={Link}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <MenuBook />
                                </ListItemIcon>
                                <ListItemText primary="Meals" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding to='/hom' component={Link}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Widgets />
                                </ListItemIcon>
                                <ListItemText primary="Menu" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Box>
        </Box>
    );
};

export default Sidebar;