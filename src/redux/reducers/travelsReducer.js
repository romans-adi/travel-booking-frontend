import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTravels = createAsyncThunk('travels/fetchTravels', async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/travels');
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

const travelsSlice = createSlice({
  name: 'travels',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTravels.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchTravels.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        data: action.payload,
      }))
      .addCase(fetchTravels.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default travelsSlice.reducer;
