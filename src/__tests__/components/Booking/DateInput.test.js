import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DateInput from '../../../components/Booking/DateInput';
import '@testing-library/jest-dom';

describe('DateInput Component', () => {
  it('renders correctly with the provided props', () => {
    const selectedDate = '2023-10-01';
    const setSelectedDate = jest.fn();

    const { getByTestId } = render(
      <DateInput selectedDate={selectedDate} setSelectedDate={setSelectedDate} />,
    );
    const dateInput = getByTestId('date-input');

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveValue(selectedDate);
  });

  it('calls the provided function when the input value changes', () => {
    const selectedDate = '2023-10-01';
    const setSelectedDate = jest.fn();
    const { getByTestId } = render(
      <DateInput selectedDate={selectedDate} setSelectedDate={setSelectedDate} />,
    );
    const newDate = '2023-11-15';
    const dateInput = getByTestId('date-input');
    fireEvent.change(dateInput, { target: { value: newDate } });

    expect(setSelectedDate).toHaveBeenCalledTimes(1);
    expect(setSelectedDate).toHaveBeenCalledWith(newDate);
  });
});
