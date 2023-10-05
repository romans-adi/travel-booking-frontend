import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Item from '../../components/Main/Item';
import MainHeader from './MainHeader';
import { placePropTypes } from './prop-types';

const MobileMain = ({ placeData }) => (
  <div className="min-h-screen bg-gray-100 justify-center flex flex-col items-center text-center relative w-full flex-1" data-testid="mobile-main">
    <MainHeader />
    <div className="my-8 px-4 w-3/4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {placeData.map((place) => (
          <Link to={`/travel/${place.id}`} key={place.id}>
            <Item
              key={place.id}
              place={place}
            />
          </Link>
        ))}
      </div>
    </div>
  </div>
);

MobileMain.propTypes = {
  placeData: PropTypes.arrayOf(placePropTypes).isRequired,
};

export default MobileMain;
