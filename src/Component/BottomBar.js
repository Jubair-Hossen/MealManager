import * as React from 'react';
import { Home, MenuBook, LocalGroceryStore, Paid, Add } from '@mui/icons-material/';
import { Box, Divider, Tabs, Tab } from '@mui/material';
import { Link } from "react-router-dom";

export default function BottomBar() {
    const currentTab = parseInt(localStorage.getItem('tab'));
    const [value, setValue] = React.useState(currentTab);

    const handleChange = (event, newValue) => {
        localStorage.setItem('tab', newValue);
        setValue(newValue);
    };
    const style = {
        maxWidth: '800px',
        marginX: 'auto',
        justifyContent: 'space-between'
    }
    const style2 = {
        background: 'white',
        position: 'fixed',
        zIndex: 50,
        bottom: 0,
        left: 0,
        right: 0,
        display: { sm: 'block', md: 'none' }
    }
    return (
        <Box sx={style2}>
            <Divider />
            <Tabs sx={style} value={value} onChange={handleChange} aria-label="icon label tabs example">
                <Tab sx={{ minWidth: '10px', width: '20%', margin: 'auto' }} icon={<Home />} aria-label="HOME" to='/' component={Link} />
                <Tab sx={{ minWidth: '10px', width: '20%', margin: 'auto' }} icon={<LocalGroceryStore />} aria-label="MEALCOST" to='/mealcost' component={Link} />
                <Tab sx={{ minWidth: '10px', width: '20%', margin: 'auto' }} icon={<MenuBook />} aria-label="MEMBERS" to='/members' component={Link} />
                <Tab sx={{ minWidth: '10px', width: '20%', margin: 'auto' }} icon={<Paid />} aria-label="DEPOSITE" to='/deposite' component={Link} />
                <Tab sx={{ minWidth: '10px', width: '20%', margin: 'auto' }} icon={<Add />} aria-label="NEARBY" to='/' component={Link} />
            </Tabs>
        </Box>
    );
}
