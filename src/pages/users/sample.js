/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { DataTable } from '../../component/index';
import { column, data } from '../../constants/Constants';

function Sample() {
  return (
    <>
      <h2>Static Table</h2>
      <DataTable data={data} columns={column} />
    </>
  );
}
export default Sample;
