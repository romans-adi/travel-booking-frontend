import { configureStore } from '@reduxjs/toolkit';
import { faker } from '@faker-js/faker';
import travelsReducer, { fetchTravels } from '../../redux/reducers/travelsReducer';

describe('travelsReducer', () => {
  it('should handle fetchTravels.pending', () => {
    const initialState = {
      data: [],
      loading: false,
      error: null,
    };

    const store = configureStore({
      reducer: {
        travels: travelsReducer,
      },
    });

    store.dispatch(fetchTravels.pending());

    const state = store.getState().travels;

    expect(state).toEqual({
      ...initialState,
      loading: true,
      error: null,
    });
  });

  it('should handle fetchTravels.fulfilled', () => {
    const initialState = {
      data: [],
      loading: true,
      error: null,
    };

    const responseData = Array.from({ length: 5 }, () => ({
      id: faker.string.uuid(),
      name: faker.lorem.words(3),
      destination: faker.location.city(),
      startDate: faker.date.future().toISOString(),
      endDate: faker.date.future().toISOString(),
    }));

    const store = configureStore({
      reducer: {
        travels: travelsReducer,
      },
    });

    store.dispatch(fetchTravels.fulfilled(responseData));

    const state = store.getState().travels;

    expect(state).toEqual({
      ...initialState,
      loading: false,
      data: responseData,
    });
  });

  it('should handle fetchTravels.rejected', () => {
    const initialState = {
      data: [],
      loading: true,
      error: null,
    };

    const errorMessage = 'An error occurred';

    const store = configureStore({
      reducer: {
        travels: travelsReducer,
      },
    });

    store.dispatch(fetchTravels.rejected(new Error(errorMessage)));

    const state = store.getState().travels;

    expect(state).toEqual({
      ...initialState,
      loading: false,
      error: errorMessage,
    });
  });
});
