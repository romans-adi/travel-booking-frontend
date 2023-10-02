import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Main from '../../pages/Main/Main';
import { fetchPlaces } from '../../redux/reducers/placesReducer';
import { fetchTravels } from '../../redux/reducers/travelsReducer';

const middlewares = [thunk]; // Add thunk middleware
const mockStore = configureMockStore(middlewares);

test('renders without errors when loading is false and provides data', () => {
  const initialState = {
    places: {
      loading: false,
      data: [
        {
          id: 1,
          name: 'Place 1',
        },
        {
          id: 2,
          name: 'Place 2',
        },
      ],
    },
    travels: {
      data: [
        {
          id: 1,
          place_id: 1,
          travel_type: 'Type 1',
        },
        {
          id: 2,
          place_id: 2,
          travel_type: 'Type 2',
        },
      ],
    },
  };
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <Router>
        <Main />
      </Router>
    </Provider>,
  );

  store.dispatch(fetchPlaces());
  store.dispatch(fetchTravels());
});
