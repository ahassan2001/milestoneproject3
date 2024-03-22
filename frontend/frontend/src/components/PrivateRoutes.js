import React from 'react';
import { Route, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <Route
      {...rest}
        element={user ? <Element /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;