import React from 'react';
import { render, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Carousel from '../../../components/Main/Carousel/Carousel';

const sampleItems = [
  {
    id: 1,
    name: 'Item 1',
    description: 'Description 1',
    main_picture: 'image1.jpg',
    travelType: 'Type 1',
  },
  {
    id: 2,
    name: 'Item 2',
    description: 'Description 2',
    main_picture: 'image2.jpg',
    travelType: 'Type 2',
  },
];

const mockPrevSlide = jest.fn();
const mockNextSlide = jest.fn();

describe('Carousel Component', () => {
  const mockStore = configureStore([]);

  it('renders items correctly', () => {
    const store = mockStore({
      auth: {
        user: {
          role: 'user',
        },
      },
    });

    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Carousel
            items={sampleItems}
            prevSlide={mockPrevSlide}
            nextSlide={mockNextSlide}
            currentIndex={0}
          />
        </MemoryRouter>
      </Provider>,
    );

    sampleItems.forEach((item) => {
      expect(getByText(item.name)).toBeInTheDocument();
      expect(getByText(item.description)).toBeInTheDocument();
      expect(getByAltText(item.name)).toBeInTheDocument();
    });
  });

  it('updates active item with keyboard navigation', () => {
    const store = mockStore({
      auth: {
        user: {
          role: 'user',
        },
      },
    });

    const { getByText, container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Carousel
            items={sampleItems}
            currentIndex={0}
            prevSlide={mockPrevSlide}
            nextSlide={mockNextSlide}
          />
        </MemoryRouter>
      </Provider>,
    );

    act(() => {
      userEvent.type(container, '{arrowleft}');
    });

    expect(getByText(sampleItems[sampleItems.length - 1].name)).toBeInTheDocument();

    act(() => {
      userEvent.type(container, '{arrowright}');
    });

    expect(getByText(sampleItems[0].name)).toBeInTheDocument();
  });
});
