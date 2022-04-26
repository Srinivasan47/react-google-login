import { makeStyles } from '@mui/styles';

export default makeStyles(
  {
    wrapper: {
      position: 'relative',
      marginTop: '20px',
      padding: '10px'
    },
    iconSearch: {
      color: 'var(--theme-text-white) !important'
    },
    fixedTableHeader: {
      searchInput: {
        position: 'sticky',
        top: 0,
        zIndex: 999,
        background: '#171717'
      },
      '& MuiTableHead-root tr>th': {
        position: 'sticky',
        top: '53px',
        zIndex: 999,
        background: '#171717'
      }
    },
    searchInput: {
      '& input': {
        fontSize: '30px'
      },
      '& ::placeholder': {
        textOverflow: 'ellipsis !important',
        color: 'var(--theme-text-white) !important'
      },
      '& :before': {
        borderBottom: '1px solid',
        borderBottomColor: 'var(--theme-primary-color) !important'
      },
      '& :hover:before': {
        borderBottom: '1px solid',
        borderBottomColor: 'var(--theme-primary-color) !important'
      },
      '& :after': {
        borderBottom: '1px solid',
        borderBottomColor: 'var(--theme-primary-color) !important'
      }
    },
    tableContainer: {
      color: 'var(--theme-text-white)',
      overflowX: 'visible !important',
      '& .MuiButtonBase-root': {
        color: 'var(--theme-text-white)'
      }
    },
    titleBorder: {
      border: '1px solid #0071ba'
    }
  },
  { name: 'DataTableStyle' }
);
