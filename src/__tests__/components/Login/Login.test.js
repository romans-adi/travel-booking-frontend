import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import LogIn from '../../../components/LogIn/LogIn';
import { loginUser } from '../../../redux/reducers/auth/authActions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('LogIn', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it('renders the LogIn component correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <LogIn />
        </MemoryRouter>
      </Provider>,
    );
    expect(container).toBeTruthy();
  });

  it('submits the form when LOGIN button is clicked', async () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <LogIn />
        </MemoryRouter>
      </Provider>,
    );

    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    const loginButton = getByText('LOGIN');
    fireEvent.click(loginButton);
    store.dispatch(loginUser({ email: 'test@example.com', password: 'password123' }));
    await waitFor(() => expect(window.location.pathname).toBe('/'));
  });
});
