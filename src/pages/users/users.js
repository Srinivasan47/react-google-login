/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect } from 'react';
import { DataTable } from '../../component/index';
import { getAllUsers } from '../../services/userServices';

function Users() {
  const userListColumn = [
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Username',
      accessor: 'username'
    },
    {
      Header: 'Email',
      accessor: 'email'
    },
    {
      Header: 'Phone Number',
      accessor: 'phone'
    }
  ];
  const [usersList, setUsersList] = useState();
  useEffect(async () => {
    try {
      const response = await getAllUsers();
      setUsersList(response);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <h2>Dynamic Table</h2>
      <DataTable data={usersList} columns={userListColumn} />
    </>
  );
}
export default Users;
