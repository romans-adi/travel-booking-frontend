import { configureStore } from '@reduxjs/toolkit';
import placesReducer from './reducers/placesReducer';
import travelsReducer from './reducers/travelsReducer';
import bookingReducer from './reducers/bookingReducer';

const store = configureStore({
  reducer: {
    places: placesReducer,
    travels: travelsReducer,
    bookings: bookingReducer,
  },
});

export default store;
