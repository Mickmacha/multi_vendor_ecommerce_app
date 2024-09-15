// services/authServices.ts
import axios from 'axios';
import { User, AuthAction } from '../reducers/authReducer';

const API_URL = 'http://localhost:5000'; // Adjust this to your backend URL
const AUTH_URL = `${API_URL}/api/auth`;

export const login = async (
  email: string,
  password: string,
  type: 'customer' | 'vendor',
  dispatch: React.Dispatch<AuthAction>
) => {
  dispatch({ type: 'LOGIN_START' });
  try {
    const response = await axios.post(`${AUTH_URL}/login/${type}`, { email, password }, { withCredentials: true });
    console.log("response", response.data.user); 
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data.user });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: 'Login failed' });
  }
};

export const logout = async (dispatch: React.Dispatch<AuthAction>) => {
  try {
    await axios.post(`${AUTH_URL}/logout`, {}, { withCredentials: true });
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
    const response = await axios.post(`${AUTH_URL}/register/${type}`, { name, email, password });
    dispatch({ type: 'REGISTER_SUCCESS', payload: response.data.user });
  } catch (error) {
    dispatch({ type: 'REGISTER_FAILURE', payload: 'Registration failed' });
  }
};