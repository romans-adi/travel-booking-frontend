import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMountain, faGlobe, faSun, faBuilding, faTree, faCity, faMountainSun, faPersonHiking, faMosquito,
  faChampagneGlasses, faBicycle, faFire, faUmbrellaBeach, faCaravan, faTowerObservation, faHippo,
  faSnowflake, faPersonSkiing, faMonument, faLandmarkDome, faPersonBiking,
} from '@fortawesome/free-solid-svg-icons';

function TravelTypeIcons({ travelType }) {
  switch (travelType) {
    case 'cultural':
      return (
        <div className="flex items-center justify-center gap-4 my-4">
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faGlobe} />
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faMonument} />
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faPersonBiking} />
        </div>
      );
    case 'beach':
      return (
        <div className="flex items-center justify-center gap-4 my-4">
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faBuilding} />
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faChampagneGlasses} />
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faUmbrellaBeach} />
        </div>
      );
    case 'history':
      return (
        <div className="flex items-center justify-center gap-4 my-4">
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faSun} />
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faMonument} />
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faLandmarkDome} />
        </div>
      );
    case 'skiing':
      return (
        <div className="flex items-center justify-center gap-4 my-4">
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faMountain} />
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faSnowflake} />
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faPersonSkiing} />
        </div>
      );
    case 'safari':
      return (
        <div className="flex items-center justify-center gap-4 my-4">
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faHippo} />
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faTowerObservation} />
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faCaravan} />
        </div>
      );
    case 'mountain':
      return (
        <div className="flex items-center justify-center gap-4 my-4">
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faMountain} />
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faMountainSun} />
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faPersonHiking} />
        </div>
      );
    case 'rainforest':
      return (
        <div className="flex items-center justify-center gap-4 my-4">
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faTree} />
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faMosquito} />
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faPersonHiking} />
        </div>
      );
    case 'city':
      return (
        <div className="flex items-center justify-center gap-4 my-4">
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faCity} />
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faChampagneGlasses} />
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faBicycle} />
        </div>
      );
    case 'desert':
      return (
        <div className="flex items-center justify-center gap-4 my-4">
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faSun} />
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faPersonHiking} />
          <FontAwesomeIcon className="fa-1x text-gray-300 hover:bg-main hover:border-main hover:text-white rounded-full border-4 border-gray-300 w-4 p-4 transition-transform transform hover:scale-110" icon={faFire} />
        </div>
      );
    default:
      return null;
  }
}

TravelTypeIcons.propTypes = {
  travelType: PropTypes.string.isRequired,
};

export default TravelTypeIcons;
