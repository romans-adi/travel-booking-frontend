import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPlaces = createAsyncThunk('places/fetchPlaces', async () => {
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

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaces.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchPlaces.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        data: action.payload,
      }))
      .addCase(fetchPlaces.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default placesSlice.reducer;
