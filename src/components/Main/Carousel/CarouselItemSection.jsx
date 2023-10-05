import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CarouselItem from './CarouselItem';

const CarouselItemsSection = ({ items }) => (
  <TransitionGroup component={null}>
    {items.map((item) => (
      <CSSTransition
        key={item.id}
        classNames="carousel-card"
        timeout={900}
        unmountOnExit
      >
        <div data-testid={`carousel-item-${item.id}`}>
          <CarouselItem item={item} />
        </div>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

CarouselItemsSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      main_picture: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CarouselItemsSection;
