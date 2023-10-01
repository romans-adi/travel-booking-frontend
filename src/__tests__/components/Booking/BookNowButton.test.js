import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BookNowButton from '../../../components/Booking/BookButton';
import '@testing-library/jest-dom';

describe('BookNowButton Component', () => {
  it('renders correctly with the provided function', () => {
    const handleCreateBooking = jest.fn();
    const { getByText } = render(
      <BookNowButton handleCreateBooking={handleCreateBooking} />,
    );
    const buttonElement = getByText('Book Now');
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the provided function when clicked', () => {
    const handleCreateBooking = jest.fn();
    const { getByText } = render(
      <BookNowButton handleCreateBooking={handleCreateBooking} />,
    );
    const buttonElement = getByText('Book Now');
    fireEvent.click(buttonElement);
    expect(handleCreateBooking).toHaveBeenCalledTimes(1);
  });
});
