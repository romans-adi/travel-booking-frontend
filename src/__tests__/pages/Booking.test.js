import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Bookings from '../../pages/Booking/Booking';
import '@testing-library/jest-dom';
import mockRouter from '../../__mocks__/mockRouter';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
  bookings: {
    loading: false,
  },
  places: {
    data: [],
  },
};

const apiService = {
  createBooking: jest.fn(),
};

describe('renders Bookings component', () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('dispatches the correct action', async () => {
    apiService.createBooking.mockResolvedValue({});
    const { getByText } = render(
      <mockRouter.BrowserRouter>
        <Provider store={store}>
          <Bookings />
        </Provider>
      </mockRouter.BrowserRouter>,
    );

    const bookNowButton = getByText('Book Now');
    await act(async () => {
      await apiService.createBooking();
      fireEvent.click(bookNowButton);
    });

    store.dispatch({
      type: 'bookings/createBooking/fulfilled',
      payload: {
        city: 'ExpectedCity',
        dateOfBooking: 'ExpectedDate',
        travelId: 3,
        userId: 1,
      },
    });

    const actions = store.getActions();
    expect(actions).toContainEqual({
      type: 'bookings/createBooking/fulfilled',
      payload: {
        city: 'ExpectedCity',
        dateOfBooking: 'ExpectedDate',
        travelId: 3,
        userId: 1,
      },
    });
  });
});
