import { makeStyles } from '@mui/styles';

const drawerWidth = 240;
export default makeStyles((theme) => ({
  logo: {
    color: 'var(--theme-text-white) !important'
  },
  title: {
    color: 'var(--theme-text-white) !important',
    textTransform: 'uppercase',
    fontSize: '14px !important'
  },
  menu: {
    color: 'var(--theme-text-white) !important',
    textTransform: 'capitalize'
  },
  show: {
    display: 'block'
  },
  hidden: {
    display: 'none'
  },
  sideBarOpen: {
    width: `calc(100% - ${drawerWidth}px) !important`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));
