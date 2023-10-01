import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import CarouselItem from '../../../components/Main/Carousel/CarouselItem';

const sampleItem = {
  id: 1,
  name: 'Item 1',
  description: 'Description 1',
  main_picture: 'image1.jpg',
  travelType: 'Type 1',
};

describe('CarouselItem Component', () => {
  it('renders the item correctly', () => {
    const { getByText, getByAltText } = render(
      <Router>
        <CarouselItem item={sampleItem} />
      </Router>,
    );

    const nameElement = getByText(sampleItem.name);
    const descriptionElement = getByText(sampleItem.description);
    const imageElement = getByAltText(sampleItem.name);

    expect(nameElement).toBeTruthy();
    expect(descriptionElement).toBeTruthy();
    expect(imageElement).toBeTruthy();
    expect(imageElement).toHaveAttribute('src', sampleItem.main_picture);
  });

  it('renders a link to the travel page with the correct path', () => {
    const { getByRole } = render(
      <Router>
        <CarouselItem item={sampleItem} />
      </Router>,
    );

    const linkElement = getByRole('link');

    expect(linkElement).toHaveAttribute('href', `/travel/${sampleItem.id}`);
  });
});
