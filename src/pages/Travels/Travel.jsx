import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
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
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-stone-600 text-2xl text-center">Loading...</div>
      </div>
    );
  }

  if (travelsError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>
          Error:
          {' '}
          {travelsError}
        </div>
      </div>
    );
  }

  const selectedPlace = places.find((place) => place.id === selectedTravel.place_id);

  return (
    <div className="w-100 flex-1 relative">
      <TravelContent
        selectedTravel={selectedTravel}
        selectedPlace={selectedPlace}
        randomPlaceImages={randomPlaceImages}
      />
      <div className="absolute bottom-8">
        <Link to="/places">
          <button
            type="button"
            aria-label="Back"
            className="rounded-r-full h-14 w-20 bg-gray-300 hover:bg-main text-white outline-none transition duration-700 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 transform ml-8 rotate-180"
            >
              <polygon points="5 2 17 12 5 22" fill="none" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Travel;
