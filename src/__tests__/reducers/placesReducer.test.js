import { configureStore } from '@reduxjs/toolkit';
import placesReducer, { fetchPlaces } from '../../redux/reducers/placesReducer';

describe('placesReducer', () => {
  it('should handle fetchPlaces.pending', () => {
    const initialState = {
      data: [],
      loading: false,
      error: null,
    };

    const store = configureStore({
      reducer: {
        places: placesReducer,
      },
    });

    store.dispatch(fetchPlaces.pending());

    const state = store.getState().places;

    expect(state).toEqual({
      ...initialState,
      loading: true,
      error: null,
    });
  });

  it('should handle fetchPlaces.fulfilled', () => {
    const initialState = {
      data: [],
      loading: true,
      error: null,
    };

    const responseData = [
      {
        id: 1,
        name: 'Place 1',
        description: 'Description 1',
      },
      {
        id: 2,
        name: 'Place 2',
        description: 'Description 2',
      },
    ];

    const store = configureStore({
      reducer: {
        places: placesReducer,
      },
    });

    store.dispatch(fetchPlaces.fulfilled(responseData));

    const state = store.getState().places;

    expect(state).toEqual({
      ...initialState,
      loading: false,
      data: responseData,
    });
  });

  it('should handle fetchPlaces.rejected', () => {
    const initialState = {
      data: [],
      loading: true,
      error: null,
    };

    const errorMessage = 'An error occurred';

    const store = configureStore({
      reducer: {
        places: placesReducer,
      },
    });

    store.dispatch(fetchPlaces.rejected(new Error(errorMessage)));

    const state = store.getState().places;

    expect(state).toEqual({
      ...initialState,
      loading: false,
      error: errorMessage,
    });
  });
});
