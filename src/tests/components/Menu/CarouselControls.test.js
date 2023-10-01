import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import jest-dom matchers
import CarouselControls from '../../../components/Main/Carousel/CarouselControl';

describe('CarouselControls Component', () => {
  it('calls handlePrevSlide when prev button is clicked', () => {
    const mockPrevSlide = jest.fn();
    const mockNextSlide = jest.fn();

    const { getByTestId } = render(
      <CarouselControls
        handlePrevSlide={mockPrevSlide}
        handleNextSlide={mockNextSlide}
        isPrevArrowClicked={false}
        isNextArrowClicked={false}
      />,
    );

    const prevButton = getByTestId('prev-button');
    fireEvent.click(prevButton);

    expect(mockPrevSlide).toHaveBeenCalled();
    expect(mockNextSlide).not.toHaveBeenCalled();
  });

  it('calls handleNextSlide when next button is clicked', () => {
    const mockPrevSlide = jest.fn();
    const mockNextSlide = jest.fn();

    const { getByTestId } = render(
      <CarouselControls
        handlePrevSlide={mockPrevSlide}
        handleNextSlide={mockNextSlide}
        isPrevArrowClicked={false}
        isNextArrowClicked={false}
      />,
    );

    const nextButton = getByTestId('next-button');
    fireEvent.click(nextButton);

    expect(mockPrevSlide).not.toHaveBeenCalled();
    expect(mockNextSlide).toHaveBeenCalled();
  });

  it('applies the correct classes based on isPrevArrowClicked and isNextArrowClicked', () => {
    const { getByTestId } = render(
      <CarouselControls
        handlePrevSlide={() => { }}
        handleNextSlide={() => { }}
        isPrevArrowClicked
        isNextArrowClicked={false}
      />,
    );

    const prevButton = getByTestId('prev-button');
    const nextButton = getByTestId('next-button');

    expect(prevButton).toHaveClass('bg-main');
    expect(nextButton).not.toHaveClass('bg-main');
  });
});
