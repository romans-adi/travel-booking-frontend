import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../components/Menu/Carousel/Carousel';
import MainHeader from './MainHeader';
import { itemsWithTravelTypePropTypes } from './prop-types';

function DesktopMain({
  itemsWithTravelType, currentIndex, prevSlide, nextSlide,
}) {
  return (
    <div className="min-h-screen bg-gray-100 justify-center flex flex-col items-center text-center relative w-full flex-1">
      <MainHeader />
      <div className="my-8 px-4 w-3/4">
        <Carousel
          items={itemsWithTravelType}
          currentIndex={currentIndex}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
        />
      </div>
    </div>
  );
}

DesktopMain.propTypes = {
  itemsWithTravelType: PropTypes.arrayOf(itemsWithTravelTypePropTypes).isRequired,
  currentIndex: PropTypes.number.isRequired,
  prevSlide: PropTypes.func.isRequired,
  nextSlide: PropTypes.func.isRequired,
};

export default DesktopMain;
