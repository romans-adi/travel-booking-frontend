import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTravels } from '../../redux/reducers/travelsReducer';
import { fetchPlaces } from '../../redux/reducers/placesReducer';
import TravelContent from './TravelContent';

function Travel() {
  const dispatch = useDispatch();
  const { travelId } = useParams();
  const travelsData = useSelector((state) => state.travels.data);
  const travelsLoading = useSelector((state) => state.travels.loading);
  const travelsError = useSelector((state) => state.travels.error);
  const places = useSelector((state) => state.places.data);
  const [randomPlaceImages, setRandomPlaceImages] = useState([]);

  useEffect(() => {
    if (places.length > 0) {
      const shuffledPlaces = [...places].sort(() => Math.random() - 0.5);
      const selectedPlaces = shuffledPlaces.slice(0, 10);
      const imageUrls = selectedPlaces.map((place) => place.main_picture);
      setRandomPlaceImages(imageUrls);
    }
  }, [places]);

  useEffect(() => {
    dispatch(fetchTravels());
    dispatch(fetchPlaces());
  }, [dispatch]);

  const selectedTravel = travelsData.find((travel) => travel.id === Number(travelId));

  if (!selectedTravel) {
    return <div>Travel not found</div>;
  }

  if (travelsLoading) {
    return <div>Loading...</div>;
  }

  if (travelsError) {
    return (
      <div>
        Error:
        {' '}
        {travelsError}
      </div>
    );
  }

  const selectedPlace = places.find((place) => place.id === selectedTravel.place_id);

  return (
    <div className="w-100 mx-auto">
      <TravelContent
        selectedTravel={selectedTravel}
        selectedPlace={selectedPlace}
        randomPlaceImages={randomPlaceImages}
      />
    </div>
  );
}

export default Travel;
