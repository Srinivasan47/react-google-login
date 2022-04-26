import { makeStyles } from '@mui/styles';

export default makeStyles(
  {
    loaderDualRing: {
      display: 'inline-block',
      width: '80px',
      height: '80px',
      '&::after': {
        content: ' ',
        display: 'block',
        width: '64px',
        height: '64px',
        margin: '8px',
        borderRadius: '50%',
        border: '6px solid #fff',
        borderColor: '#fff transparent #fff transparent',
        animation: '$slideDown 1.2s linear infinite'
      }
    },
    '@keyframes slideDown': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' }
    }
  },
  { name: 'LoaderStyle' }
);
