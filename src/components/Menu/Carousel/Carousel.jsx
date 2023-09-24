import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CarouselItemsSection from './CarouselItemSection';
import CarouselControls from './CarouselControl';
import '../../../App.scss';

function Carousel({
  items, prevSlide, nextSlide, currentIndex,
}) {
  const [showExtraCard, setShowExtraCard] = useState(false);

  useEffect(() => {
    setShowExtraCard(false);
  }, []);

  const visibleItems = items.slice(currentIndex, currentIndex + 3);

  const handlePrevSlide = () => {
    setShowExtraCard(true);
    setTimeout(() => {
      setShowExtraCard(false);
      prevSlide();
    }, 0);
  };

  const handleNextSlide = () => {
    setShowExtraCard(true);
    setTimeout(() => {
      setShowExtraCard(false);
      nextSlide();
    }, 0);
  };

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
