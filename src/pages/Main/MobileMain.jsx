import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Item from '../../components/Menu/Item';
import MainHeader from './MainHeader';
import { tourPropTypes } from './prop-types';

function MobileMain({ tourData }) {
  return (
    <div className="min-h-screen bg-gray-100 justify-center flex flex-col items-center text-center relative w-full flex-1">
      <MainHeader />
      <div className="my-8 px-4 w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourData.map((tour) => (
            <Link to={`/travel/${tour.id}`} key={tour.id}>
              <Item
                key={tour.id}
                tour={tour}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

MobileMain.propTypes = {
  tourData: PropTypes.arrayOf(tourPropTypes).isRequired,
};

export default MobileMain;
