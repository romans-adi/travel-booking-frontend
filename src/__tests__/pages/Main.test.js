import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Main from '../../pages/Main/Main';
import { fetchPlaces } from '../../redux/reducers/placesReducer';
import { fetchTravels } from '../../redux/reducers/travelsReducer';
import '@testing-library/jest-dom';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
  places: {
    loading: false,
    data: [
      {
        id: 1,
        name: 'Place 1',
        description: 'Description 1',
      },
      {
        id: 2,
        name: 'Place 2',
        description: 'Description 666',

      },
    ],
  },
  travels: {
    data: [
      {
        id: 1,
        place_id: 1,
        travel_type: 'Type 1',
        description: 'Bad Place',
      },
      {
        id: 2,
        place_id: 2,
        travel_type: 'Type 2',
        description: 'Good Place',
      },
    ],
  },
};

const store = mockStore({
  auth: {
    user: {
      role: 'user-role',
    },
  },
  ...initialState,
});

test('renders without errors when loading is false and provides data', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    </Provider>,
  );

  store.dispatch(fetchPlaces());
  store.dispatch(fetchTravels());

  await waitFor(() => {
    expect(screen.getByText('Place 1')).toBeInTheDocument();
    expect(screen.getByText('Place 2')).toBeInTheDocument();
  });
});
