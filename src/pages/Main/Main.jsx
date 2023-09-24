/* eslint-disable import/no-extraneous-dependencies */
import React, {
  useState, useEffect, useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { fetchTours } from '../../redux/reducers/toursReducer';
import { fetchTravels } from '../../redux/reducers/travelsReducer';
import MobileMain from './MobileMain';
import DesktopMain from './DesktopMain';

function Main() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [itemsToShow, setItemsToShow] = useState(6);
  const [itemsToLoad] = useState(3);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tours?.loading);
  const tourData = useSelector((state) => state.tours.data);
  const travelsData = useSelector((state) => state.travels?.data);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchTours());
    dispatch(fetchTravels());
  }, []);

  const getTravelTypeForTour = (tourId) => {
    const travelItem = travelsData.find((travel) => travel.place_id === tourId);
    return travelItem ? travelItem.travel_type : '';
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? tourData.length - 3 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === tourData.length - 3 ? 0 : prevIndex + 1));
  };

  const loadMoreItems = useCallback(() => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + itemsToLoad);
  }, [itemsToLoad]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY
        >= document.body.offsetHeight - 100
      ) {
        loadMoreItems();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loadMoreItems]);

  const itemsWithTravelType = tourData.map((tour) => ({
    ...tour,
    travelType: getTravelTypeForTour(tour.id),
  }));

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 justify-center flex flex-col items-center text-center relative w-full flex-1">
        {' '}
        <ClipLoader size="50" />
        ;
      </div>
    );
  }

  if (isMobile) {
    return (
      <MobileMain
        tourData={tourData}
        itemsToShow={itemsToShow}
        getTravelTypeForTour={getTravelTypeForTour}
      />
    );
  }

  return (
    <DesktopMain
      itemsWithTravelType={itemsWithTravelType}
      currentIndex={currentIndex}
      prevSlide={prevSlide}
      nextSlide={nextSlide}
    />
  );
}

export default Main;
