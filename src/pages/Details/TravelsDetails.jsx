/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTravels } from '../../redux/reducers/travelsReducer';

function TravelsDetails() {
  const dispatch = useDispatch();
  const { travelId } = useParams();
  const travelsData = useSelector((state) => state.travels.data);
  const travelsLoading = useSelector((state) => state.travels.loading);
  const travelsError = useSelector((state) => state.travels.error);

  useEffect(() => {
    dispatch(fetchTravels());
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

  return (
    <div>
      <h2>Travel Details</h2>
      <p>
        Travel Type:
        {' '}
        {selectedTravel.travel_type}
      </p>
      <p>
        Price:
        {' '}
        {selectedTravel.price}
      </p>
      <p>
        Trip Duration:
        {' '}
        {selectedTravel.trip_duration}
        {' '}
        days
      </p>
      <p>
        Group Size:
        {' '}
        {selectedTravel.group_size}
      </p>
      {/* Render other details as needed */}
    </div>
  );
}

export default TravelsDetails;
