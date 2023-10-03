import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import DesktopMain from '../../pages/Main/DesktopMain';
import '@testing-library/jest-dom';

const mockCurrentIndex = 0;
const mockPrevSlide = jest.fn();
const mockNextSlide = jest.fn();

const mockItemsWithTravelType = [
  {
    id: 1,
    travelType: 'Type 1',
    name: 'Item 1',
  },
  {
    id: 2,
    travelType: 'Type 2',
    name: 'Item 2',
  },
];

test('renders DesktopMain component', () => {
  render(
    <MemoryRouter>
      <DesktopMain
        itemsWithTravelType={mockItemsWithTravelType}
        currentIndex={mockCurrentIndex}
        prevSlide={mockPrevSlide}
        nextSlide={mockNextSlide}
      />
    </MemoryRouter>,
  );

  expect(screen.getByText('Most Popular Destinations')).toBeInTheDocument();
  expect(screen.getByText('Please select Your Destination')).toBeInTheDocument();
});
