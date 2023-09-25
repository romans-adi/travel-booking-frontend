import PropTypes from 'prop-types';

export const tourPropTypes = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
});

export const itemsWithTravelTypePropTypes = PropTypes.shape({
  id: PropTypes.number,
  travelType: PropTypes.string,
  name: PropTypes.string,
});
