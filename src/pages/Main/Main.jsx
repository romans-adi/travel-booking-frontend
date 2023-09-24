/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { Link } from 'react-router-dom';
import { fetchTours } from '../../redux/reducers/toursReducer';
import { fetchTravels } from '../../redux/reducers/travelsReducer';

function Main() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tours?.loading);
  const tourData = useSelector((state) => state.tours.data);

  useEffect(() => {
    dispatch(fetchTours());
    dispatch(fetchTravels());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 justify-center flex flex-col items-center text-center relative w-full flex-1">
        <ClipLoader size="50" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 justify-center flex flex-col items-center text-center relative w-full flex-1">
      <h1 className="text-4xl font-bold">Most Popular Tours</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tourData.map((tour) => (
          <Link to={`/travel/${tour.id}`} key={tour.id} className="hover:underline">
            <div className="border rounded p-4">
              <h2 className="text-xl font-semibold">{tour.name}</h2>
              <p className="text-gray-500">{tour.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Main;
