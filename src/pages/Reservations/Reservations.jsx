/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchReservations } from '../../redux/reducers/reservationsReducer';
import { fetchPlaces } from '../../redux/reducers/placesReducer';

function Reservations() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.data);
  const isLoading = useSelector((state) => state.reservations.loading);
  const places = useSelector((state) => state.places.data);
  // const user = useSelector((state) => state.user);

  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleCreateReservation = async () => {
    try {
      await axios.post('http://localhost:3000/api/v1/reservations', {
        reservation: {
          date_of_reservation: selectedDate,
          city: selectedCity,
          user_id: 1,
          travel_id: 1,
        },
      });
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  useEffect(() => {
    dispatch(fetchReservations());
    dispatch(fetchPlaces());
  }, [dispatch]);

  return (
    <div
      className="relative w-full"
      style={{
        backgroundImage: `url(${places.length > 0 ? places[Math.floor(Math.random() * places.length)].main_picture : ''})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: '1',
      }}
    >
      <div className="bg-opacity-80 bg-main z-20 absolute inset-0" />
      <div className="container mx-auto p-4 relative z-40">
        <h2 className="text-4xl font-bold text-white mb-4">Reservations</h2>
        {isLoading ? (
          <p className="text-white">Loading...</p>
        ) : (
          <ul className="space-y-4">
            {reservations.map((reservation) => (
              <li
                key={reservation.id}
                className="bg-white bg-opacity-70 rounded p-4 shadow-md"
              >
                <p className="text-lg font-semibold">
                  Item Name:
                  {' '}
                  {reservation.item_name}
                </p>
                <p className="text-base">
                  Date:
                  {' '}
                  {reservation.date_of_reservation}
                </p>
                <p className="text-base">
                  City:
                  {' '}
                  {reservation.city}
                </p>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 p-4 bg-white bg-opacity-70 rounded-md shadow-md">
          <input
            id="city"
            placeholder="Choose Your City"
            name="city"
            onChange={(e) => setSelectedCity(e.target.value)}
            className="mt-4 px-4 py-2 rounded-xl bg-main text-white border-2 border-yellow-400"
          />
        </div>
        <input
          type="date"
          id="date"
          name="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="mt-4 px-4 py-2 rounded-xl bg-main text-white border-2 border-yellow-400"
        />
        <button
          type="button"
          onClick={handleCreateReservation}
          className="mt-4 px-4 py-2 rounded-xl bg-main text-white font-semibold"
        >
          Book
        </button>
      </div>
    </div>
  );
}

export default Reservations;
