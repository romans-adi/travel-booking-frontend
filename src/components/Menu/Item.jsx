import React from 'react';
import PropTypes from 'prop-types';
import TravelTypeIcons from './TravelTypesIcons';

function Item({ tour, travelType }) {
  return (
    <div className="md:w-96 items-center text-center">
      <div
        className="w-full h-52 rounded-lg bg-cover bg-center"
        style={{
          backgroundImage: `url(${tour.main_picture})`,
        }}
      />
      <h2 className="text-xl font-semibold mt-4">{tour.name}</h2>
      <p className="text-gray-500">{tour.description}</p>
      <TravelTypeIcons travelType={travelType} />
    </div>
  );
}

Item.propTypes = {
  tour: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    main_picture: PropTypes.string.isRequired,
    travel_type: PropTypes.string.isRequired,
  }).isRequired,
  travelType: PropTypes.string.isRequired,
};

export default Item;
