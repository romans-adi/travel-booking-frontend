import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import DesktopMain from '../../pages/Main/DesktopMain';

const mockCurrentIndex = 0;
const mockPrevSlide = jest.fn();
const mockNextSlide = jest.fn();

const mockItemsWithTravelType = [
  {
    id: 1,
    travelType: 'Type 1',
    name: 'Item 1',
    description: 'Bad Place',
  },
  {
    id: 2,
    travelType: 'Type 2',
    name: 'Item 2',
    description: 'Good Place',
  },
];

const mockStore = configureStore([]);
const store = mockStore({
  auth: {
    user: {
      role: 'user-role',
    },
  },
});

test('renders DesktopMain component', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <DesktopMain
          itemsWithTravelType={mockItemsWithTravelType}
          currentIndex={mockCurrentIndex}
          prevSlide={mockPrevSlide}
          nextSlide={mockNextSlide}
        />
      </Provider>
    </MemoryRouter>,
  );

  expect(screen.getByText('Most Popular Destinations')).toBeInTheDocument();
  expect(screen.getByText('Please select Your Destination')).toBeInTheDocument();
});
