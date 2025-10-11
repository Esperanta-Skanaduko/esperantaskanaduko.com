import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Loading } from './Loading';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * Protected Route Component
 * Redirects to auth page if user is not authenticated
 */
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <Loading variant='fullscreen' />;
  }

  if (!currentUser) {
    return <Navigate to='/auth' replace />;
  }

  return <>{children}</>;
};
