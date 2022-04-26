import palette from './palette';
import typography from './typography';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => ({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1600
    }
  },
  typography,
  palette
});
