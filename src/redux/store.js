/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import toursReducer from './reducers/toursReducer';
import travelsReducer from './reducers/travelsReducer';

const store = configureStore({
  reducer: {
    tours: toursReducer,
    travels: travelsReducer,
  },
});

export default store;
