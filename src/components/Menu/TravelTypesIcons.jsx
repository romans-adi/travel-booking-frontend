import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuidv4 } from 'uuid';
import iconMappings from './IconMapping';

function TravelTypeIcons({ travelType }) {
  const icons = iconMappings[travelType] || null;

  if (!icons) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-4 my-4">
      {icons.map((icon) => (
        <FontAwesomeIcon
          key={uuidv4()}
          className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110"
          icon={icon}
        />
      ))}
    </div>
  );
}

TravelTypeIcons.propTypes = {
  travelType: PropTypes.string.isRequired,
};

export default TravelTypeIcons;
