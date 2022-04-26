import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Button,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Menu,
  MenuItem,
  Typography,
  IconButton
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon
} from '@mui/icons-material';
import { useSelector } from 'react-redux';
import useStyles from './Header.style';

function Header({ handleLogout }) {
  const menuItem = [
    {
      id: '1',
      title: 'Static Table',
      url: '/app/table'
    },
    {
      id: '2',
      title: 'Users',
      url: '/app/users'
    },
    {
      id: '3',
      title: 'Profile',
      url: '/app/profile'
    }
  ];
  const drawerWidth = 240;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [userDetails, setuserDetails] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const user = useSelector((state) => state.authReducer.user);
  useEffect(() => {
    setuserDetails(user);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        className={open ? classes.sideBarOpen : ''}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className={classes.logo}
            variant="h2"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Demo
          </Typography>
          <Button className={classes.menu} onClick={handleClick}>
            {userDetails.name}
          </Button>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
        className={open ? classes.show : classes.hidden}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuItem.map((menu) => (
            <ListItem button component={Link} to={menu.url} key={menu.id}>
              <ListItemText primary={menu.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
export default Header;
