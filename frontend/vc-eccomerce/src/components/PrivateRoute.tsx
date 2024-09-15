import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/useAuth';

const PrivateRoute: React.FC = () => {
  const { user } = useAuth();
  console.log('Current user:', user);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
