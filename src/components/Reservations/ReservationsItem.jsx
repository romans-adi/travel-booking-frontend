import React from 'react';
import PropTypes from 'prop-types';

const ReservationListItem = ({
  booking, place, travel, onUnbook,
}) => {
  const matchingTravel = travel.find((t) => t.place_id === place.id);
  const destinationName = matchingTravel ? matchingTravel.name : booking.city;
  const listItemStyle = {
    backgroundImage: place.main_picture ? `url(${place.main_picture})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <li
      className="custom-darken-bg rounded-xl text-green-200 text-sm sm:text-lg py-4 sm:py-8 my-2 flex flex-col gap-8 sm:flex-row justify-between px-10 items-center"
      style={listItemStyle}
    >
      <div className="flex flex-col px-4 w-full sm:w-3/6 z-50">
        <div>
          <div className="w-full font-semibold">Name: </div>
          <div className="text-white font-semibold mb-4">{destinationName}</div>
        </div>
        <div>
          <div className="w-full font-semibold">Destination: </div>
          <div className="text-white font-semibold mb-4">{booking.city}</div>
        </div>
        <div>
          <div className="w-full font-semibold">Date: </div>
          <div className="text-white font-semibold mb-4">
            {new Date(booking.date_of_reservation).toLocaleDateString()}
          </div>
        </div>
      </div>
      <div className="w-full sm:w-2/6 items-center justify-center flex z-50">
        <button
          type="button"
          onClick={() => onUnbook(booking.id)}
          className="bg-red-500 text-white py-2 mt-2 rounded-md h-10 px-10 font-semibold"
          data-testid="unbook-button"
        >
          Unbook
        </button>
      </div>
    </li>
  );
};

ReservationListItem.propTypes = {
  booking: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string,
    city: PropTypes.string.isRequired,
    date_of_reservation: PropTypes.string.isRequired,
  }).isRequired,
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    main_picture: PropTypes.string.isRequired,
  }).isRequired,
  travel: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onUnbook: PropTypes.func.isRequired,
};

export default ReservationListItem;
