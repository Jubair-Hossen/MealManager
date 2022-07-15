import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import './BottomBar.css'
import { Box } from '@mui/material';
import { Divider } from '@mui/material';
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
    }
    const style2 = {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: { sm: 'block', md: 'none' }
    }
    return (
        <Box sx={style2}>
            <Divider />
            <Tabs sx={style} value={value} onChange={handleChange} aria-label="icon label tabs example">
                <Tab sx={{ minWidth: '10px' }} icon={<HomeIcon />} aria-label="Home" to='/' component={Link} />
                <Tab sx={{ minWidth: '10px' }} icon={<PhoneIcon />} aria-label="RECENTS" to='/recents' component={Link} />
                <Tab sx={{ minWidth: '10px' }} icon={<FavoriteIcon />} aria-label="FAVORITES" to='/favorites' component={Link} />
                <Tab sx={{ minWidth: '10px' }} icon={<MenuBookIcon />} aria-label="meals" to='/meals' component={Link} />
                <Tab sx={{ minWidth: '10px' }} icon={<WidgetsIcon />} aria-label="NEARBY" to='/person' component={Link} />
            </Tabs>
        </Box>
    );
}
