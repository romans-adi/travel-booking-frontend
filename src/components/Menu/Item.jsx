import React from 'react';
import PropTypes from 'prop-types';
import TravelTypeIcons from './Icons/TravelTypesIcons';

function Item({ place, travelType }) {
  return (
    <div className="md:w-96 items-center text-center">
      <div
        className="w-full h-52 rounded-lg bg-cover bg-center"
        style={{
          backgroundImage: `url(${place.main_picture})`,
        }}
      />
      <h2 className="text-xl font-semibold mt-4">{place.name}</h2>
      <p className="text-gray-500">{place.description}</p>
      <TravelTypeIcons data-testid="travel-type-icon" travelType={travelType} />
    </div>
  );
}

Item.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    main_picture: PropTypes.string.isRequired,
    travel_type: PropTypes.string,
  }).isRequired,
  travelType: PropTypes.string,
};

Item.defaultProps = {
  travelType: 'cultural',
};

export default Item;
