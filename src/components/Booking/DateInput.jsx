import React from 'react';
import PropTypes from 'prop-types';

const DateInput = ({ selectedDate, setSelectedDate }) => (
  <div className="flex-grow w-full md:w-1/2">
    <input
      type="date"
      id="date"
      name="date"
      value={selectedDate}
      onChange={(e) => setSelectedDate(e.target.value)}
      className="w-full px-6 py-4 rounded-full text-sm bg-main text-white outline-none font-semibold border border-whitefont-semibold focus:bg-second cursor-text"
    />
  </div>
);

DateInput.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};

export default DateInput;
