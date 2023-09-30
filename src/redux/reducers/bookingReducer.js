import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBookings = createAsyncThunk('bookings/fetchBookings', async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/reservations');
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
});

export const createBooking = createAsyncThunk(
  'bookings/createBooking',
  async ({
    dateOfBooking, city, userId, travelId,
  }) => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/reservations', {
        reservation: {
          date_of_reservation: dateOfBooking,
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

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchBookings.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        data: action.payload,
      }))
      .addCase(fetchBookings.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default bookingsSlice.reducer;
