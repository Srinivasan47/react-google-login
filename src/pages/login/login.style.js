import { makeStyles } from '@mui/styles';

export default makeStyles(
  {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100vh',
      background:
        'transparent linear-gradient(180deg, var(--theme-login-background) 0%, var(--theme-background) 100%) 0% 0% no-repeat padding-box'
    },
    loginHeader: {
      color: 'var(--theme-white-color)',
      margin: '10px auto 10px 10px'
    },
    loginContainer: {
      margin: 'auto'
    },
    logo: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      color: 'var(--theme-text-white)',
      background: 'var(--theme-primary-color)',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      fontSize: '30px',
      marginRight: '40px'
    }
  },
  { name: 'LoginStyle' }
);
