import { configureStore } from '@reduxjs/toolkit';
import placesReducer from './reducers/placesReducer';
import travelsReducer from './reducers/travelsReducer';
import authReducer from './reducers/auth/authSlice';

const store = configureStore({
  reducer: {
    places: placesReducer,
    travels: travelsReducer,
    auth: authReducer,
  },
});

export default store;
