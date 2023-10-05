import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ReservationsList from '../../pages/Reservations/ReservationsList';
import '@testing-library/jest-dom';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('ReservationsList Component', () => {
  let store;

  const initialState = {
    places: {
      data: [],
    },
    bookings: {
      data: [],
      loading: false,
      error: null,
    },
    travels: {
      data: [],
    },
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('renders loading state', () => {
    const loadingState = {
      ...initialState,
      bookings: {
        ...initialState.bookings,
        loading: true,
      },
    };

    store = mockStore(loadingState);

    render(
      <Provider store={store}>
        <ReservationsList />
      </Provider>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
