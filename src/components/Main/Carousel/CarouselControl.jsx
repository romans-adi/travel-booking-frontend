import React from 'react';
import PropTypes from 'prop-types';

function CarouselControls({
  handlePrevSlide, handleNextSlide, isNextArrowClicked, isPrevArrowClicked,
}) {
  return (
    <div className="carousel-controls">
      <button
        type="button"
        data-testid="prev-button"
        className={`carousel-control prev rounded-r-full h-14 w-20 ${
          isPrevArrowClicked ? 'bg-main' : 'bg-gray-300'
        } hover:bg-main text-white left-0 absolute top-1/2 transform -translate-y-1/2 outline-none transition duration-700 ease-in-out`}
        onClick={handlePrevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 transform ml-8 rotate-180"
        >
          <polygon points="5 2 17 12 5 22" fill="none" />
        </svg>
      </button>
      <button
        type="button"
        data-testid="next-button"
        className={`carousel-control next rounded-l-full h-14 w-20 hover:bg-main ${isNextArrowClicked ? 'bg-main' : 'bg-gray-300'} text-white text-2xl right-0 absolute top-1/2 transform -translate-y-1/2 outline-none transition duration-700 ease-in-out`}
        onClick={handleNextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 transform ml-6"
        >
          <polygon points="5 2 17 12 5 22" fill="none" />
        </svg>
      </button>
    </div>
  );
}

CarouselControls.propTypes = {
  handlePrevSlide: PropTypes.func.isRequired,
  handleNextSlide: PropTypes.func.isRequired,
  isPrevArrowClicked: PropTypes.bool.isRequired,
  isNextArrowClicked: PropTypes.bool.isRequired,
};

export default CarouselControls;
