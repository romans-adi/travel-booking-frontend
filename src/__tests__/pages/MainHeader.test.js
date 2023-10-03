import React from 'react';
import { render, screen } from '@testing-library/react';
import MainHeader from '../../pages/Main/MainHeader';
import '@testing-library/jest-dom';

test('renders MainHeader component', () => {
  render(<MainHeader />);

  const headerText = screen.getByText('Most Popular Destinations');
  const subheaderText = screen.getByText('Please select Your Destination');

  expect(headerText).toBeInTheDocument();
  expect(subheaderText).toBeInTheDocument();
});
