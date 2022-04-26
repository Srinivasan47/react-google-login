/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  LastPage as LastPageIcon,
  FirstPage as FirstPageIcon,
  Search as SearchIcon,
  KeyboardArrowRight,
  KeyboardArrowLeft
} from '@mui/icons-material';
import {
  IconButton,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Paper,
  TableFooter
} from '@mui/material';
import {
  useTable,
  usePagination,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce
} from 'react-table';
import PropTypes from 'prop-types';
import useStyles from './DataTable.style';

function GlobalFilter({ globalFilter, setGlobalFilter, handleOnChange }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((val) => {
    setGlobalFilter(val || undefined);
    handleOnChange(val);
  }, 200);

  return (
    <TextField
      fullWidth
      id="global-search"
      className={classes.searchInput}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" className={classes.iconSearch}>
            <SearchIcon fontSize="large" />
          </InputAdornment>
        )
      }}
      variant="standard"
      value={value || ''}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      placeholder="Search"
    />
  );
}

function DataTable({
  columns,
  data,
  handleOnChange,
  enableSearch,
  pagination
}) {
  const classes = useStyles();
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    preGlobalFilteredRows,
    setGlobalFilter,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }
    },
    useFilters, // useFilters!
    useGlobalFilter, // useGlobalFilter!
    usePagination
  );
  const { pageSize } = state;

  return (
    <Box sx={{ width: '100%' }} className={classes.fixedTableHeader}>
      <TableContainer component={Paper} className={classes.tableContainer}>
        {enableSearch && (
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
            handleOnChange={handleOnChange}
          />
        )}
        <Table stickyHeader {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()} key={`row-${index}`}>
                  {row.cells.map((cell) => (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
            {page.length === 0 && (
              <TableRow>
                <TableCell sx={{ textAlign: 'center' }} colSpan={100}>
                  No Records Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          {pagination && (
            <TableFooter>
              <TableRow>
                <TableCell colSpan={10}>
                  <Box className={classes.paginationSection}>
                    <span>Rows per page:&nbsp;</span>
                    <select
                      defaultValue=""
                      value={pageSize}
                      onChange={(e) => setPageSize(Number(e.target.value))}
                    >
                      {['10', '25', '50'].map((pageRow) => (
                        <option key={pageRow} value={pageRow}>
                          {pageRow}
                        </option>
                      ))}
                    </select>
                    <IconButton
                      onClick={() => gotoPage(0)}
                      disabled={!canPreviousPage}
                      aria-label="first page"
                    >
                      <FirstPageIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => previousPage()}
                      disabled={!canPreviousPage}
                      aria-label="previous page"
                    >
                      <KeyboardArrowLeft />
                    </IconButton>
                    <IconButton
                      onClick={() => nextPage()}
                      disabled={!canNextPage}
                      aria-label="next page"
                    >
                      <KeyboardArrowRight />
                    </IconButton>
                    <IconButton
                      onClick={() => gotoPage(pageCount - 1)}
                      disabled={!canNextPage}
                      aria-label="last page"
                    >
                      <LastPageIcon />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </TableContainer>
    </Box>
  );
}
DataTable.defaultProps = {
  columns: [],
  data: [],
  pagination: false,
  enableSearch: false
};
DataTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.string),
  pagination: PropTypes.bool,
  enableSearch: PropTypes.bool
};
export default DataTable;
