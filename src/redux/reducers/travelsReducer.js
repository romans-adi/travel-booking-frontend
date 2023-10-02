import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const fetchTravels = createAsyncThunk('travels/fetchTravels', async () => {
  try {
    const token = localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      Authorization: token,
    };

    const response = await axios.get('http://localhost:3000/api/v1/travels', {
      headers,
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
});

export const deleteTravel = createAsyncThunk('travels/deleteTravel', async (travelId) => {
  try {
    const token = localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      Authorization: token,
    };

    await axios.delete(`http://localhost:3000/api/v1/travels/${travelId}`, {
      headers,
    });
    toast.success('Travel deleted successfully');
    return travelId;
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
      }))
      .addCase(deleteTravel.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(deleteTravel.fulfilled, (state, action) => {
        const deletedTravelId = action.payload;
        const newData = state.data.filter((travel) => travel.id !== deletedTravelId);
        return {
          ...state,
          loading: false,
          data: newData,
        };
      })
      .addCase(deleteTravel.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default travelsSlice.reducer;
