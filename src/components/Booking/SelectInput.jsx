import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({ selectedPlace, setSelectedPlace, places }) => (
  <div className="flex-grow">
    <div className="relative">
      <div className="relative">
        <select
          id="place"
          name="place"
          value={selectedPlace}
          onChange={(e) => setSelectedPlace(e.target.value)}
          className="w-full px-6 py-4 rounded-full text-sm bg-main group text-white outline-none border border-white placeholder:text-white font-semibold appearance-none focus:bg-second cursor-pointer"
        >
          <option value="" disabled>Select Your City</option>
          {places.map((place) => (
            <option key={place.id} value={place.name}>
              {place.name}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-4 flex items-center pr-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-6 transform rotate-90 text-white fill-current transition-colors duration-300"
          >
            <polygon
              points="5 2 17 12 5 22"
              fill="none"
              className={selectedPlace ? 'fill-white' : ''}
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

SelectInput.propTypes = {
  selectedPlace: PropTypes.string.isRequired,
  setSelectedPlace: PropTypes.func.isRequired,
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SelectInput;
