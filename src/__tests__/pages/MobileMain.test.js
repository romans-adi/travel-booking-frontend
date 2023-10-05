/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MobileMain from '../../pages/Main/MobileMain';
import '@testing-library/jest-dom';

const mockPlaceData = [
  {
    id: 1,
    name: 'Place 1',
    description: 'Good Place',
  },
  {
    id: 2,
    name: 'Place 2',
    description: 'Bad Place',
  },
];

describe('MobileMain Component', () => {
  it('should render the component with place items and links', () => {
    render(
      <MemoryRouter>
        <MobileMain placeData={mockPlaceData} />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('mobile-main')).toBeInTheDocument();

    mockPlaceData.forEach((place) => {
      const link = screen.getByText(place.name);
      expect(link).toBeInTheDocument();
    });
  });

  it('should have prop types defined', () => {
    const { propTypes } = MobileMain;
    const props = {
      placeData: mockPlaceData,
    };

    const propsMissing = Object.keys(propTypes).filter((key) => !props[key]);

    expect(propsMissing.length).toBe(0);
  });
});
