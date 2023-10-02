import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ReservationsList from '../../pages/Reservations/ReservationsList';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

describe('ReservationsList Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
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
    });
  });

  it('renders loading state', () => {
    store = mockStore({
      ...store.getState(),
      bookings: {
        ...store.getState().bookings,
        loading: true,
      },
    });

    render(
      <Provider store={store}>
        <ReservationsList />
      </Provider>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error state', () => {
    const errorMessage = 'An error occurred';
    store = mockStore({
      ...store.getState(),
      bookings: {
        ...store.getState().bookings,
        error: errorMessage,
      },
    });

    render(
      <Provider store={store}>
        <ReservationsList />
      </Provider>,
    );

    expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
  });

  it('renders reservations list', () => {
    const mockBookings = [];

    store = mockStore({
      ...store.getState(),
      bookings: {
        ...store.getState().bookings,
        data: mockBookings,
      },
    });

    render(
      <Provider store={store}>
        <ReservationsList />
      </Provider>,
    );

    mockBookings.forEach((booking) => {
      expect(screen.getByText(booking.city)).toBeInTheDocument();
    });
  });
});
