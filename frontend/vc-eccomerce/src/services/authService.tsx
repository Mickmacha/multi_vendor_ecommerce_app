// services/authServices.ts
import axios from 'axios';
import { User, AuthAction } from '../reducers/authReducer';

const API_URL = 'http://localhost:3000/api/auth'; // Adjust this to your backend URL

export const login = async (
  email: string,
  password: string,
  type: 'customer' | 'vendor',
  dispatch: React.Dispatch<AuthAction>
) => {
  dispatch({ type: 'LOGIN_START' });
  try {
    const response = await axios.post(`${API_URL}/login/${type}`, { email, password }, { withCredentials: true });
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data.user });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: 'Login failed' });
  }
};

export const logout = async (dispatch: React.Dispatch<AuthAction>) => {
  try {
    await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
    dispatch({ type: 'LOGOUT' });
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

export const register = async (
  name: string,
  email: string,
  password: string,
  type: 'customer' | 'vendor',
  dispatch: React.Dispatch<AuthAction>
) => {
  dispatch({ type: 'REGISTER_START' });
  try {
    const response = await axios.post(`${API_URL}/register/${type}`, { name, email, password });
    dispatch({ type: 'REGISTER_SUCCESS', payload: response.data.user });
  } catch (error) {
    dispatch({ type: 'REGISTER_FAILURE', payload: 'Registration failed' });
  }
};