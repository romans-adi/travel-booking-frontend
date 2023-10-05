import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import Navbar from '../../../components/Navbar/Navbar';

const mockStore = configureStore([]);

describe('Navbar', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: {
        isAuthenticated: true,
        user: {
          role: 'user',
        },
      },
    });
    localStorage.clear();
  });

  it('toggles the menu when burger icon is clicked for "user" role', () => {
    store = mockStore({
      auth: {
        isAuthenticated: true,
        user: {
          role: 'user',
        },
      },
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>,
    );

    const burgerIcon = getByTestId('burger-icon');
    fireEvent.click(burgerIcon);

    const navLinks = getByTestId('nav-links');
    expect(navLinks).toHaveClass('show');

    fireEvent.click(burgerIcon);
    expect(navLinks).not.toHaveClass('show');
  });

  it('toggles the menu when burger icon is clicked for "agency" role', () => {
    store = mockStore({
      auth: {
        isAuthenticated: true,
        user: {
          role: 'agency',
        },
      },
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>,
    );

    const burgerIcon = getByTestId('burger-icon');
    fireEvent.click(burgerIcon);

    const navLinks = getByTestId('nav-links');
    expect(navLinks).toHaveClass('show');

    fireEvent.click(burgerIcon);
    expect(navLinks).not.toHaveClass('show');
  });

  it('toggles the menu when burger icon is clicked for empty role', () => {
    store = mockStore({
      auth: {
        isAuthenticated: false,
        user: {
          role: '',
        },
      },
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>,
    );

    const burgerIcon = getByTestId('burger-icon');
    fireEvent.click(burgerIcon);

    const navLinks = getByTestId('nav-links');
    expect(navLinks).toHaveClass('show');

    fireEvent.click(burgerIcon);
    expect(navLinks).not.toHaveClass('show');
  });
});
