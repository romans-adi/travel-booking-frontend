import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TravelTypeIcons from './TravelTypesIcons';
import '../../App.scss';

function Carousel({
  items, prevSlide, nextSlide, currentIndex,
}) {
  const visibleItems = items.slice(currentIndex, currentIndex + 3);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel-inner flex flex-col md:flex-row justify-around text-center gap-10 w-full md:items-start items-center">
          <TransitionGroup component={null}>
            {visibleItems.map((item) => (
              <CSSTransition
                key={item.id}
                classNames="carousel-card"
                timeout={1300}
                unmountOnExit
              >
                <Link to={`/travel/${item.id}`} key={item.id}>
                  <div className="carousel-card w-full items-center group justify-center flex flex-col gap-6 transform hover:scale-105 duration-500 hover:bg-gray-700 hover:shadow-md rounded-lg hover:text-white transition">
                    <img
                      src={item.main_picture}
                      alt={item.name}
                      className="carousel-image w-96 h-64 object-cover rounded-lg custom-shadow"
                    />
                    <h2 className="carousel-title border-dotted border-b-2 border-gray-300 w-fit text-center pb-4">
                      {item.name}
                    </h2>
                    <p className="carousel-description h-8 text-gray-500 text-xs group-hover:text-white">{item.description}</p>
                    <TravelTypeIcons travelType={item.travelType} />
                  </div>
                </Link>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
      <div className="carousel-controls">
        <button
          type="button"
          className="carousel-control prev rounded-r-full h-14 w-20 bg-gray-300 hover:bg-main text-white left-0 absolute top-1/2 transform -translate-y-1/2 outline-none transition duration-700 ease-in-out"
          onClick={prevSlide}
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
          className="carousel-control next rounded-l-full h-14 w-20 bg-gray-300 hover:bg-main text-white text-2xl right-0 absolute top-1/2 transform -translate-y-1/2 outline-none transition duration-700 ease-in-out"
          onClick={nextSlide}
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
