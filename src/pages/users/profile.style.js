import { makeStyles } from '@mui/styles';

export default makeStyles(
  {
    container: {
      height: 'calc(100vh - 80px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    profileCard: {
      width: '250px',
      height: 'auto'
    },
    profileTitle: {
      textTransform: 'capitalize'
    }
  },
  { name: 'ProfileStyle' }
);
