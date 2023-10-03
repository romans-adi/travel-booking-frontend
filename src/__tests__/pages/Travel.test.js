import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Travel from '../../pages/Travels/Travel';

const mockStore = configureStore([]);

const initialState = {
  travels: {
    data: [],
    loading: false,
    error: null,
  },
  places: {
    data: [],
  },
};

let store;

beforeEach(() => {
  store = mockStore(initialState);
});

jest.mock('../../redux/reducers/travelsReducer', () => ({
  fetchTravels: jest.fn(),
}));

jest.mock('../../redux/reducers/placesReducer', () => ({
  fetchPlaces: jest.fn(),
}));

test('renders the loading state', async () => {
  const mockFetchTravels = jest.fn().mockResolvedValue([]);
  const mockFetchPlaces = jest.fn().mockResolvedValue([]);
  store.dispatch = mockFetchTravels;
  store.dispatch = mockFetchPlaces;

  render(
    <Provider store={store}>
      <Router>
        <Travel />
      </Router>
    </Provider>,
  );

  await Promise.all([mockFetchTravels(), mockFetchPlaces()]);
  await mockFetchTravels();
  await mockFetchPlaces();
});
