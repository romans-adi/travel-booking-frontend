import { configureStore } from '@reduxjs/toolkit';
import placesReducer from './reducers/placesReducer';
import travelsReducer from './reducers/travelsReducer';

const store = configureStore({
  reducer: {
    places: placesReducer,
    travels: travelsReducer,
  },
});

export default store;
