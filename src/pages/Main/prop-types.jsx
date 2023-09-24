import PropTypes from 'prop-types';

export const tourPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
});

export const itemsWithTravelTypePropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  travelType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});
