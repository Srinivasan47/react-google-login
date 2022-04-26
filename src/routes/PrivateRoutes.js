import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Users from '../pages/users/users';
import Sample from '../pages/users/sample';
import Profile from '../pages/users/profile';

function RequireAuth({ children }) {
  const isSignedIn = useSelector((state) => state.authReducer.isLoggedIn);
  return isSignedIn === true ? children : <Navigate to="/" replace />;
}
const PrivateRoutes = {
  path: '/app',
  element: <MainLayout />,
  children: [
    {
      path: '/app/profile',
      element: (
        <RequireAuth>
          <Profile />
        </RequireAuth>
      )
    },
    {
      path: '/app/users',
      element: (
        <RequireAuth>
          <Users />
        </RequireAuth>
      )
    },
    {
      path: '/app/table',
      element: (
        <RequireAuth>
          <Sample />
        </RequireAuth>
      )
    }
  ]
};

export default PrivateRoutes;
