/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Travel from '../../pages/Travels/Travel';
import mockAxios from '../../__mocks__/axios';
import '@testing-library/jest-dom';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Travel Component', () => {
  it('renders loading state when travels are loading', async () => {
    const initialState = {
      travels: {
        loading: true,
        data: [],
        error: null,
      },
      places: {
        data: [],
      },
    };

    const store = mockStore(initialState);
    mockAxios.get.mockResolvedValue({ data: [] });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/travel/1']}>
          <Routes>
            <Route path="/travel/:travelId" element={<Travel />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).toBeInTheDocument();
    });
  });
});
