import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TravelTypeIcons from '../Icons/TravelTypesIcons';

function CarouselItem({ item }) {
  return (
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
        <p className="carousel-description h-8 text-gray-500 text-xs group-hover:text-white">
          {item.description}
        </p>
        <TravelTypeIcons travelType={item.travelType} />
      </div>
    </Link>
  );
}

CarouselItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    main_picture: PropTypes.string.isRequired,
    travelType: PropTypes.string.isRequired,
  }).isRequired,
};

export default CarouselItem;
