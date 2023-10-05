import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReservationListItem from '../../../components/Reservations/ReservationsItem';
import '@testing-library/jest-dom';

describe('ReservationListItem Component', () => {
  const booking = {
    id: 1,
    date: '2023-10-01',
    city: 'New York',
    date_of_reservation: '2023-09-20',
  };

  const place = {
    id: 1,
    main_picture: 'example.jpg',
  };

  const travel = [
    {
      id: 1,
      name: 'Travel Destination',
      place_id: 1,
    },
  ];

  const onUnbook = jest.fn();

  it('renders with correct data', () => {
    const { getByText, getByTestId } = render(
      <ReservationListItem booking={booking} place={place} travel={travel} onUnbook={onUnbook} />,
    );
    expect(getByText('Name:')).toBeInTheDocument();
    expect(getByText('Travel Destination')).toBeInTheDocument();
    expect(getByText('Destination:')).toBeInTheDocument();
    expect(getByText('New York')).toBeInTheDocument();
    expect(getByText(/(\d{1,2}\/\d{1,2}\/\d{4})/)).toBeInTheDocument();
    expect(getByTestId('unbook-button')).toBeInTheDocument();
  });

  it('calls onUnbook when unbook button is clicked', () => {
    const { getByTestId } = render(
      <ReservationListItem booking={booking} place={place} travel={travel} onUnbook={onUnbook} />,
    );

    const unbookButton = getByTestId('unbook-button');
    fireEvent.click(unbookButton);
    expect(onUnbook).toHaveBeenCalledWith(1);
  });
});
