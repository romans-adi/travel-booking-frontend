import React from 'react';
import { render } from '@testing-library/react';
import Item from '../../../components/Menu/Item';
import '@testing-library/jest-dom';

// eslint-disable-next-line react/display-name
jest.mock('../../../components/Menu/Icons/TravelTypesIcons', () => () => (
  <div data-testid="travel-type-icon-mock">Mocked TravelTypeIcons</div>
));

describe('Item Component', () => {
  const samplePlace = {
    id: 1,
    name: 'Sample Place',
    description: 'A description of the place.',
    main_picture: 'sample.jpg',
    travel_type: 'cultural',
  };

  it('renders correctly with the provided props', () => {
    const { getByText, getByTestId } = render(
      <Item place={samplePlace} travelType="adventure" />,
    );

    const nameElement = getByText('Sample Place');
    const descriptionElement = getByText('A description of the place.');
    const travelTypeIconElement = getByTestId('travel-type-icon-mock');

    expect(nameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(travelTypeIconElement).toBeInTheDocument();
  });

  it('renders with default travelType if not provided', () => {
    const { getByTestId } = render(<Item place={samplePlace} />);
    const travelTypeIconElement = getByTestId('travel-type-icon-mock');

    expect(travelTypeIconElement).toBeInTheDocument();
  });
});
