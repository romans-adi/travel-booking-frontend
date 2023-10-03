import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingSuccess from '../../pages/Booking/BookingSuccess';
import '@testing-library/jest-dom';

const selectedDate = '2023-10-15';
const selectedPlace = 'Test Place';
const places = [
  {
    name: 'Test Place',
    main_picture: 'test-image.jpg',
  },
  {
    name: 'Another Place',
    main_picture: 'another-image.jpg',
  },
];

describe('BookingSuccess', () => {
  it('should render successfully with all provided props', () => {
    const { getByText, getByAltText } = render(
      <BrowserRouter>
        <BookingSuccess selectedDate={selectedDate} selectedPlace={selectedPlace} places={places} />
      </BrowserRouter>,
    );

    expect(getByText(/successfully reserved a trip/i)).toBeInTheDocument();
    expect(getByText(selectedDate)).toBeInTheDocument();
    expect(getByText(selectedPlace)).toBeInTheDocument();
    expect(getByText('If you want to check your reservations, please follow')).toBeInTheDocument();
    expect(getByText('this link')).toBeInTheDocument();

    expect(getByAltText(selectedPlace)).toBeInTheDocument();
  });

  it('should render with default selectedPlace when not provided', () => {
    const { getByText } = render(
      <BrowserRouter>
        <BookingSuccess selectedDate={selectedDate} places={places} />
      </BrowserRouter>,
    );

    expect(getByText(/successfully reserved a trip/i)).toBeInTheDocument();
    expect(getByText(selectedDate)).toBeInTheDocument();
    expect(getByText('If you want to check your reservations, please follow')).toBeInTheDocument();
    expect(getByText('this link')).toBeInTheDocument();
  });

  it('should render successfully with no places', () => {
    const { getByText } = render(
      <BrowserRouter>
        <BookingSuccess selectedDate={selectedDate} selectedPlace={selectedPlace} places={[]} />
      </BrowserRouter>,

    );

    expect(getByText(/successfully reserved a trip/i)).toBeInTheDocument();
    expect(getByText(selectedDate)).toBeInTheDocument();
    expect(getByText(selectedPlace)).toBeInTheDocument();
    expect(getByText('If you want to check your reservations, please follow')).toBeInTheDocument();
    expect(getByText('this link')).toBeInTheDocument();
  });
});
