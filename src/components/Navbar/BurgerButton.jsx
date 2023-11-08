import React from 'react';
import PropTypes from 'prop-types';

const BurgerButton = ({ onClick, showMenu }) => (
  <button
    onClick={onClick}
    type="button"
    className={showMenu ? 'burger-icon' : 'close-button'}
    style={{ zIndex: 100 }}
    data-testid="burger-icon"
  >
    <div className={showMenu ? 'burger-bar' : 'close-bar'} />
    <div className={showMenu ? 'burger-bar' : 'close-bar'} />
  </button>
);

BurgerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  showMenu: PropTypes.bool.isRequired,
};

export default BurgerButton;
