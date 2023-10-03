import axios from 'axios';
import { toast } from 'react-hot-toast';
import {
  authRequest, authSuccess, authFailure, logout,
} from './authSlice';

const apiURL = 'https://traveli-api.onrender.com/';

export const registerUser = (formData) => async (dispatch) => {
  dispatch(authRequest());

  try {
    const response = await axios.post(
      `${apiURL}/signup`,
      { user: formData },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.status === 200) {
      const token = response.headers.authorization;
      const user = response.data.data;
      dispatch(authSuccess({ token, user }));
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      toast.success(`Welcome, ${user.name}`);
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    dispatch(authFailure(error.message));
    toast.error(
      'Registration failed. Please check your information and try again.',
    );
  }
};

export const loginUser = (formData) => async (dispatch) => {
  dispatch(authRequest());

  try {
    const response = await axios.post(
      `${apiURL}/login`,
      { user: formData },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.status === 200) {
      const token = response.headers.authorization;
      const user = response.data.data;
      dispatch(authSuccess({ token, user }));
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      toast.success(`Welcome, ${user.name}`);
      console.log(token);
    } else {
      const errorResponse = response.data || 'An error occurred.';
      throw new Error(errorResponse);
    }
  } catch (error) {
    dispatch(authFailure(error.message));
    toast.error('Login failed. Email or password is incorrect.');
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    const response = await axios.delete(`${apiURL}/logout`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });

    if (response.status === 200) {
      dispatch(logout());
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      toast.success('Logged out successfully.');
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    dispatch(authFailure(error.message));
    toast.error('Logout failed. Please try again.');
  }
};
