import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import CarouselItemsSection from './CarouselItemSection';
import CarouselControls from './CarouselControl';
import '../../../App.scss';

function Carousel({
  items, prevSlide, nextSlide, currentIndex,
}) {
  const [showExtraCard, setShowExtraCard] = useState(false);
  const visibleItems = items.slice(currentIndex, currentIndex + 3);
  const [isPrevArrowClicked, setIsPrevArrowClicked] = useState(false);
  const [isNextArrowClicked, setIsNextArrowClicked] = useState(false);

  const resetStylesAfterTimeout = useCallback(() => {
    setTimeout(() => {
      setIsPrevArrowClicked(false);
      setIsNextArrowClicked(false);
    }, 3000);
  }, []);

  const handlePrevSlide = useCallback(() => {
    setShowExtraCard(true);
    setTimeout(() => {
      setShowExtraCard(false);
      prevSlide();
      setIsPrevArrowClicked(true);
      setIsNextArrowClicked(false);
      resetStylesAfterTimeout();
    }, 0);
  }, [prevSlide, setIsPrevArrowClicked, setIsNextArrowClicked, resetStylesAfterTimeout]);

  const handleNextSlide = useCallback(() => {
    setShowExtraCard(true);
    setTimeout(() => {
      setShowExtraCard(false);
      nextSlide();
      setIsPrevArrowClicked(false);
      setIsNextArrowClicked(true);
      resetStylesAfterTimeout();
    }, 0);
  }, [nextSlide, setIsPrevArrowClicked, setIsNextArrowClicked, resetStylesAfterTimeout]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrevSlide();
      } else if (e.key === 'ArrowRight') {
        handleNextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handlePrevSlide, handleNextSlide]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel-inner flex flex-col md:flex-row justify-around text-center gap-10 w-full md:items-start items-center">
          <CarouselItemsSection items={visibleItems} showExtraCard={showExtraCard} />
        </div>
      </div>
      <CarouselControls
        handlePrevSlide={handlePrevSlide}
        handleNextSlide={handleNextSlide}
        isPrevArrowClicked={isPrevArrowClicked}
        isNextArrowClicked={isNextArrowClicked}
      />
    </div>
  );
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      main_picture: PropTypes.string.isRequired,
    }),
  ).isRequired,
  prevSlide: PropTypes.func.isRequired,
  nextSlide: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default Carousel;
