import React from 'react';
import PropTypes from 'prop-types';

const BookNowButton = ({ handleCreateBooking }) => (
  <button
    type="button"
    onClick={handleCreateBooking}
    className="flex-grow px-6 py-4 rounded-full text-sm bg-white text-main hover:text-white hover:bg-second font-semibold w-full md:w-2/4 border-2-white"
  >
    Book Now
  </button>
);

BookNowButton.propTypes = {
  handleCreateBooking: PropTypes.func.isRequired,
};

export default BookNowButton;
