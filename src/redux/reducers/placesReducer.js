import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const fetchPlaces = createAsyncThunk('places/fetchPlaces', async () => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };

    const response = await axios.get('https://traveli-api.onrender.com/api/v1/places', {
      headers,
    });

    return response.data;
  } catch (error) {
    toast.error('An error occurred while fetching places.');
    throw error;
  }
});

export const deletePlace = createAsyncThunk('places/deletePlace', async (placeId) => {
  try {
    const token = localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      Authorization: token,
    };

    await axios.delete(`https://traveli-api.onrender.com/api/v1/places/${placeId}`, {
      headers,
    });

    toast.success('Place deleted successfully');
    return placeId;
  } catch (error) {
    toast.error('Error deleting place');
    throw error;
  }
});

export const createPlace = createAsyncThunk('places/createPlace', async (newPlaceData) => {
  try {
    const token = localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      Authorization: token,
    };

    const response = await axios.post('https://traveli-api.onrender.com/api/v1/places', {
      place: newPlaceData,
    }, {
      headers,
    });

    toast.success('Place created successfully');
    return response.data;
  } catch (error) {
    toast.error('Error creating place');
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
      }))
      .addCase(createPlace.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(createPlace.fulfilled, (state, action) => ({
        ...state,
        data: [...state.data, action.payload],
        loading: false,
      }))
      .addCase(createPlace.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }))
      .addCase(deletePlace.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(deletePlace.fulfilled, (state, action) => {
        const deletedPlaceId = action.payload;
        const newData = state.data.filter((place) => place.id !== deletedPlaceId);
        return {
          ...state,
          loading: false,
          data: newData,
        };
      })
      .addCase(deletePlace.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default placesSlice.reducer;
