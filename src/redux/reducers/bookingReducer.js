import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const fetchBookings = createAsyncThunk(
  'bookings/fetchBookings',
  async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://traveli-backend.onrender.com/api/v1/reservations', {
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

export const createBooking = createAsyncThunk(
  'bookings/createBooking',
  async ({ dateOfBooking, city, travelId }, { rejectWithValue, dispatch }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('https://traveli-backend.onrender.com/api/v1/reservations', {
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
      toast.error('An error occurred while creating a booking.');
      dispatch(createBooking.rejected(error));
      return rejectWithValue(error.message);
    }
  },
);

export const removeBooking = createAsyncThunk(
  'bookings/removeBooking',
  async (reservationId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`https://traveli-backend.onrender.com/api/v1/reservations/${reservationId}`, {
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

export const initialState = {
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
    createBooking: (state, action) => ({
      ...state,
      data: [...state.data, action.payload],
      loading: false,
      error: null,
    }),
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
