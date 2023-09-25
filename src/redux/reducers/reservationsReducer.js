import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchReservations = createAsyncThunk('reservations/fetchReservations', async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/reservations');
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
});

export const createReservation = createAsyncThunk(
  'reservations/createReservation',
  async ({
    dateOfReservation, city, userId, travelId,
  }) => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/reservations', {
        reservation: {
          date_of_reservation: dateOfReservation,
          city,
          user_id: userId,
          travel_id: travelId,
        },
      });

      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },
);

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchReservations.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        data: action.payload,
      }))
      .addCase(fetchReservations.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default reservationsSlice.reducer;
