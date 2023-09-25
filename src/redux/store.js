import { configureStore } from '@reduxjs/toolkit';
import placesReducer from './reducers/placesReducer';
import travelsReducer from './reducers/travelsReducer';
import reservationsReducer from './reducers/reservationsReducer';

const store = configureStore({
  reducer: {
    places: placesReducer,
    travels: travelsReducer,
    reservations: reservationsReducer,
  },
});

export default store;
