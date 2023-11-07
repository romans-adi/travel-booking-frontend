/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import './HomeSlider.scss';

const HomeSlider = ({ sliderImages, slideIndex }) => (
  <div
    className="home-slider-container"
  >
    {sliderImages.map((image, index) => (
      <img
        src={image}
        alt="slider"
        key={index}
        style={{ transform: `translate3d(0, ${-slideIndex * 100}%, 0)` }}
      />
    ))}
  </div>
);

HomeSlider.propTypes = {
  sliderImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  slideIndex: PropTypes.number.isRequired,
};

export default HomeSlider;
