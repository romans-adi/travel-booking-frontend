import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomeSlider from '../../../components/HomeSlider/HomeSlider';

describe('HomeSlider', () => {
  it('renders the HomeSlider component correctly', () => {
    const sliderImages = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    const slideIndex = 2;

    const { container, getAllByAltText } = render(
      <HomeSlider sliderImages={sliderImages} slideIndex={slideIndex} />,
    );
    expect(container).toBeTruthy();
    const images = getAllByAltText('slider');

    expect(images.length).toBe(sliderImages.length);
    sliderImages.forEach((image, index) => {
      expect(images[index]).toHaveAttribute('src', image);
    });
  });
});
