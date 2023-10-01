import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function BookingSuccess({ selectedDate, selectedPlace, places }) {
  return (
    <div className="flex flex-col h-screen relative w-full">
      <img
        src={places.find((place) => place.name === selectedPlace)?.main_picture}
        alt={selectedPlace}
        className="flex-grow w-full object-cover max-h-screen"
      />
      <div className="bg-black bg-opacity-60 text-white text-3xl font-semibold text-center p-10 absolute bottom-0 w-full">
        You successfully reserved a trip!
        {' '}
        <br />
        {' '}
        <span className="text-green-600 font-bold">{selectedDate}</span>
        {' '}
        to
        {' '}
        <span className="text-yellow-600 font-bold">{selectedPlace}</span>
        {' '}
        <br />
        {' '}
        <span className="text-xl">If you want to check your reservations, please follow</span>
        {' '}
        <Link to="/reservations" className="text-white text-xl font-semibold underline hover:text-supportive">this link</Link>
        .
      </div>
    </div>
  );
}

BookingSuccess.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  selectedPlace: PropTypes.string,
  places: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      main_picture: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

BookingSuccess.defaultProps = {
  selectedPlace: '',
};

export default BookingSuccess;
