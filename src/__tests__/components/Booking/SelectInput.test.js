import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SelectInput from '../../../components/Booking/SelectInput';

const places = [
  { id: 1, name: 'City A' },
  { id: 2, name: 'City B' },
  { id: 3, name: 'City C' },
];

describe('SelectInput Component', () => {
  it('renders correctly with the provided props', () => {
    const selectedPlace = 'City B';
    const setSelectedPlace = jest.fn();

    const { getByTestId, getByText } = render(
      <SelectInput
        selectedPlace={selectedPlace}
        setSelectedPlace={setSelectedPlace}
        places={places}
      />,
    );

    const selectInput = getByTestId('select-input');
    const placeholderOption = getByText('Select Your City');

    expect(selectInput).toBeInTheDocument();
    expect(selectInput).toHaveValue(selectedPlace);
    expect(placeholderOption).toBeInTheDocument();
  });

  it('calls the provided function when the select value changes', () => {
    const selectedPlace = 'City B';
    const setSelectedPlace = jest.fn();

    const { getByTestId } = render(
      <SelectInput
        selectedPlace={selectedPlace}
        setSelectedPlace={setSelectedPlace}
        places={places}
      />,
    );

    const selectInput = getByTestId('select-input');
    const newPlace = 'City C';

    fireEvent.change(selectInput, { target: { value: newPlace } });

    expect(setSelectedPlace).toHaveBeenCalledTimes(1);
    expect(setSelectedPlace).toHaveBeenCalledWith(newPlace);
  });
});
