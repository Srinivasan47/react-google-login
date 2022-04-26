import React, { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import IdleTimerContainer from '../../component/IdleTimer/IdleTimer';
import IdleTimeout from '../../component/IdleTimeout/IdleTimeout';
import Header from './Header/Header';
import useStyles from './style';

function MainLayout() {
  const classes = useStyles();
  const dispatch = useDispatch();
  // Modal open state
  const [open, setOpen] = useState(false);
  const [isTimedout, setIsTimedout] = useState(false);

  const timeoutModalHandler = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setIsTimedout(false);
  };

  const handleLogout = () => {
    setOpen(false);
    dispatch(logoutUser());
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header handleLogout={handleLogout} />
      <div className={classes.mainContainer}>
        <IdleTimerContainer
          handleLogout={handleLogout}
          timeout={isTimedout}
          timeoutModal={timeoutModalHandler}
          timedoutHandler={(bool) => {
            setIsTimedout(bool);
          }}
        />
        <IdleTimeout
          showModal={open}
          handleClose={handleClose}
          handleLogout={handleLogout}
        />
        <Outlet />
      </div>
    </Box>
  );
}
export default MainLayout;
