import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const apiURL = 'https://traveli-api.onrender.com/';

const initialState = {
  token: null,
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authRequest: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    authSuccess: (state, action) => {
      const { token, user } = action.payload;
      return {
        ...state,
        loading: false,
        token,
        user,
        error: null,
        isAuthenticated: true,
      };
    },
    authFailure: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        loading: false,
        error: payload,
        isAuthenticated: false,
      };
    },
    logout: (state) => ({
      ...state,
      token: null,
      user: null,
      isAuthenticated: false,
    }),
    selectUserId: (state) => state.user?.id,
  },
});

export const selectUser = (state) => state.auth.user;
export const selectAuthToken = (state) => state.auth.token;
export const selectUserId = (state) => state.auth.user?.id;

export const {
  authRequest,
  authSuccess,
  authFailure,
  logout,
} = authSlice.actions;

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (formData) => {
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
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      toast.success(`Welcome, ${user.name}`);
      return { token, user };
    }
    throw new Error(response.statusText);
  },
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (formData) => {
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
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      toast.success(`Welcome, ${user.name}`);
      return { token, user };
    }
    const errorResponse = response.data || 'An error occurred.';
    throw new Error(errorResponse);
  },
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { dispatch }) => {
    dispatch(logout());
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast.success('Logged out successfully.');
  },
);

export default authSlice.reducer;
