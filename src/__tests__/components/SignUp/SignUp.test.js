import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SignUp from '../../../components/SignUp/SignUp';
import { registerUser } from '../../../redux/reducers/auth/authActions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('SignUp', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it('submits the form when SIGN UP button is clicked', async () => {
    const { getByPlaceholderText, getByLabelText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      </Provider>,
    );

    const roleSelect = getByLabelText('Select your role:');
    const nameInput = getByPlaceholderText('Name');
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const confirmPasswordInput = getByPlaceholderText('Confirm Password');

    fireEvent.change(roleSelect, { target: { value: 'user' } });
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });

    store.dispatch(
      registerUser({
        role: 'user',
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123',
        password_confirmation: 'password123',
      }),
    );
  });
});
