// contexts/useAuth.ts
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { login, logout, register } from '../services/authService';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const { state, dispatch } = context;

  return {
    user: state.user,
    login: (email: string, password: string, type: 'customer' | 'vendor') =>
      login(email, password, type, dispatch),
    logout: () => logout(dispatch),
    register: (name: string, email: string, password: string, type: 'customer' | 'vendor') =>
      register(name, email, password, type, dispatch),
  };
};
