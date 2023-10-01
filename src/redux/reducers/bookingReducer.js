import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const fetchBookings = createAsyncThunk(
  'bookings/fetchBookings',
  async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/api/v1/reservations', {
        headers: {
          Authorization: `${token}`,
        },
      });
      console.log('API Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },
);

export const createBooking = createAsyncThunk(
  'bookings/createBooking',
  async ({ dateOfBooking, city, travelId }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:3000/api/v1/reservations', {
        reservation: {
          date_of_reservation: dateOfBooking,
          city,
          travel_id: travelId,
        },
      }, {
        headers: {
          Authorization: `${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },
);

export const removeBooking = createAsyncThunk(
  'bookings/removeBooking',
  async (reservationId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`http://localhost:3000/api/v1/reservations/${reservationId}`, {
        headers: {
          Authorization: `${token}`,
        },
      });

      if (response.status === 204) {
        toast.success('Reservation has been unbooked successfully.');
        return reservationId;
      }
      throw new Error(response.statusText);
    } catch (error) {
      console.error('API Error:', error);
      return rejectWithValue(error.message);
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
  reducers: {
    removeBooking: (state, action) => {
      const reservationIdToRemove = action.payload;
      return {
        ...state,
        data: state.data.filter((booking) => booking.id !== reservationIdToRemove),
        loading: false,
        error: null,
      };
    },
  },
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
      .addCase(removeBooking.fulfilled, (state, action) => {
        const reservationIdToRemove = action.payload;
        return {
          ...state,
          data: state.data.filter((booking) => booking.id !== reservationIdToRemove),
          loading: false,
          error: null,
        };
      })
      .addCase(fetchBookings.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default bookingsSlice.reducer;
