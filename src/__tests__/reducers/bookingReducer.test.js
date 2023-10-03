import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchBookings } from '../../redux/reducers/bookingReducer';
import mockAxios from '../../__mocks__/axios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Booking async actions', () => {
  const store = mockStore({});

  afterEach(() => {
    mockAxios.reset();
  });

  it('fetchBookings action should dispatch the correct actions', async () => {
    const mockBookingsResponse = [
      { id: 1, city: 'City 1' },
      { id: 2, city: 'City 2' },
    ];

    mockAxios.get.mockResolvedValue({ data: mockBookingsResponse });

    await store.dispatch(fetchBookings());

    const actions = store.getActions();

    expect(actions).toEqual([
      { type: 'bookings/fetchBookings/pending', meta: { arg: undefined, requestId: expect.any(String), requestStatus: 'pending' }, payload: undefined },
      { type: 'bookings/fetchBookings/fulfilled', meta: { arg: undefined, requestId: expect.any(String), requestStatus: 'fulfilled' }, payload: mockBookingsResponse },
    ]);
  });
});
