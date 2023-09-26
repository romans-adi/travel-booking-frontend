import React, {
  useState, useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { fetchPlaces } from '../../redux/reducers/placesReducer';
import { fetchTravels } from '../../redux/reducers/travelsReducer';
import MobileMain from './MobileMain';
import DesktopMain from './DesktopMain';

function Main() {
  const [isMobile] = useState(window.innerWidth < 768);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.places?.loading);
  const placeData = useSelector((state) => state.places.data);
  const travelsData = useSelector((state) => state.travels?.data);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchPlaces());
    dispatch(fetchTravels());
  }, [dispatch]);

  const getTravelTypeForPlace = (placeId) => {
    const travelItem = travelsData.find((travel) => travel.place_id === placeId);
    return travelItem ? travelItem.travel_type : '';
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? placeData.length - 3 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === placeData.length - 3 ? 0 : prevIndex + 1));
  };

  const itemsWithTravelType = placeData.map((place) => ({
    ...place,
    travelType: getTravelTypeForPlace(place.id),
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
        placeData={placeData}
        getTravelTypeForPlace={getTravelTypeForPlace}
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
