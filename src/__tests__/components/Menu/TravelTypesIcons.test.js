import React from 'react';
import { render } from '@testing-library/react';
import TravelTypeIcons from '../../../components/Menu/Icons/TravelTypesIcons';
import iconMappings from '../../../components/Menu/Icons/IconMapping';
import '@testing-library/jest-dom';

const sampleTravelType = 'cultural';

describe('TravelTypeIcons Component', () => {
  it('renders icons for the provided travel type', () => {
    const { container } = render(<TravelTypeIcons travelType={sampleTravelType} />);
    const icons = container.querySelectorAll('.fa-1x');

    const expectedIcons = iconMappings[sampleTravelType];

    expect(icons).toHaveLength(expectedIcons.length);
  });

  it('renders default icons when no travel type is provided', () => {
    const { container } = render(<TravelTypeIcons />);
    const icons = container.querySelectorAll('.fa-1x');

    const expectedIcons = iconMappings.cultural;

    expect(icons).toHaveLength(expectedIcons.length);
  });

  it('does not render icons for an unknown travel type', () => {
    const { container } = render(<TravelTypeIcons travelType="unknownType" />);
    const icons = container.querySelectorAll('.fa-1x');

    expect(icons).toHaveLength(0);
  });
});
