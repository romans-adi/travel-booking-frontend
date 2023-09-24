import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTours = createAsyncThunk('tours/fetchTours', async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/places');
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
});

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const toursSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTours.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchTours.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        data: action.payload,
      }))
      .addCase(fetchTours.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default toursSlice.reducer;
