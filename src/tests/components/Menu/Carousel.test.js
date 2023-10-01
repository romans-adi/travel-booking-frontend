import React from 'react';
import { render, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

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
  it('renders items correctly', () => {
    const { getByText, getByAltText } = render(
      <Carousel
        items={sampleItems}
        prevSlide={mockPrevSlide}
        nextSlide={mockNextSlide}
        currentIndex={0}
      />,
      { wrapper: MemoryRouter },
    );
    sampleItems.forEach((item) => {
      expect(getByText(item.name)).toBeInTheDocument();
      expect(getByText(item.description)).toBeInTheDocument();
      expect(getByAltText(item.name)).toBeInTheDocument();
    });
  });

  it('updates active item with keyboard navigation', () => {
    const mockPrevSlide = jest.fn();
    const mockNextSlide = jest.fn();
    const { getByText, container } = render(
      <Carousel
        items={sampleItems}
        currentIndex={0}
        prevSlide={mockPrevSlide}
        nextSlide={mockNextSlide}
      />,
      { wrapper: MemoryRouter },
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
