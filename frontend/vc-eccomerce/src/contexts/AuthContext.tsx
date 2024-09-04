// contexts/AuthContext.ts
import React, { createContext, useReducer, ReactNode } from 'react';
import { authReducer, initialState, AuthState, AuthAction } from '../reducers/authReducer';

type AuthContextType = {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};