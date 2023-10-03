/* eslint-disable react/prop-types */
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CarouselItemsSection from '../../../components/Main/Carousel/CarouselItemSection';
import '@testing-library/jest-dom';

jest.mock('react-transition-group', () => ({
  TransitionGroup: ({ children }) => <div>{children}</div>,
  CSSTransition: ({ children }) => <div>{children}</div>,
}));

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
  {
    id: 3,
    name: 'Item 3',
    description: 'Description 3',
    main_picture: 'image3.jpg',
    travelType: 'Type 3',
  },
  {
    id: 4,
    name: 'Item 4',
    description: 'Description 4',
    main_picture: 'image4.jpg',
    travelType: 'Type 4',
  },
];

describe('CarouselItemsSection Component', () => {
  it('renders the correct number of items', async () => {
    const { queryAllByTestId } = render(
      <MemoryRouter>
        <CarouselItemsSection items={sampleItems} showExtraCard={false} />
      </MemoryRouter>,
    );

    await waitFor(() => {
      const items = queryAllByTestId((testId) => testId.startsWith('carousel-item-'));
      expect(items).toHaveLength(sampleItems.length);
    });
  });

  it('renders an extra card when showExtraCard is true', async () => {
    const { queryAllByTestId } = render(
      <MemoryRouter>
        <CarouselItemsSection items={sampleItems} showExtraCard />
      </MemoryRouter>,
    );

    await waitFor(() => {
      const items = queryAllByTestId((testId) => testId.startsWith('carousel-item-'));
      expect(items).toHaveLength(sampleItems.length);
    });
  });
});
