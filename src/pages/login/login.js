/* eslint-disable no-console */
import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { loginUserAction } from '../../actions/authActions';
import useStyle from './login.style';

function Login() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useNavigate();
  const handleSuccess = (response) => {
    console.log(response);
    const userDetails = {
      token: response.accessToken,
      userDetails: response.profileObj
    };
    localStorage.setItem('user', JSON.stringify(userDetails));
    dispatch(loginUserAction(response));
    history('/app/profile');
  };
  const handleFailure = (response) => {
    console.log(response);
  };
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.loginContainer}>
        <GoogleLogin
          clientId="Client ID"
          buttonText="Login with Google"
          onSuccess={handleSuccess}
          onFailure={handleFailure}
          cookiePolicy="single_host_origin"
        />
      </Box>
    </Box>
  );
}

export default Login;
