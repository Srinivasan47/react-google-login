import React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from '@mui/material';
import { useSelector } from 'react-redux';
import useStyle from './profile.style';

function Profile() {
  const classes = useStyle();
  const userProfile = useSelector((state) => state.authReducer.user);
  return (
    <Box component="div" className={classes.container}>
      <Card className={classes.profileCard}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={userProfile.imageUrl}
            alt="Profile Picture"
            referrerpolicy="no-referrer"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              className={classes.profileTitle}
            >
              {userProfile.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {userProfile.email}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default Profile;
