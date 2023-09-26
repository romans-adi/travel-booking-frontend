import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings } from '../../redux/reducers/bookingReducer';
import { fetchPlaces } from '../../redux/reducers/placesReducer';

function ReservationsList() {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places.data);
  const bookings = useSelector((state) => state.bookings.data);
  const loading = useSelector((state) => state.bookings.loading);
  const [backgroundImage, setBackgroundImage] = useState('');
  const error = useSelector((state) => state.bookings.error);

  useEffect(() => {
    dispatch(fetchBookings());
    dispatch(fetchPlaces());
  }, [dispatch]);

  useEffect(() => {
    if (places.length > 0) {
      setBackgroundImage(places[Math.floor(Math.random() * places.length)].main_picture);
    }
  }, [places]);

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center w-full"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: '1',
      }}
    >
      <div className="bg-opacity-60 bg-lime-800 z-20 absolute inset-0" />
      <div className="mx-auto w-full justify-center items-center z-40 flex flex-col h-screen">
        <h2 className="text-4xl font-bold text-white text-center pb-8 w-3/5 border-b-2-white my-10">All Bookings</h2>
        {loading && <p className="text-white">Loading...</p>}
        {error && (
          <p className="text-white">
            Error:
            {' '}
            {error}
          </p>
        )}
        <ul className="w-3/4 text-left text-white overflow-y-auto">
          {bookings.map((booking) => (
            <li
              key={booking.id}
              className="bg-black bg-opacity-70 text-white py-2 my-2 rounded-md"
            >
              <div className="flex flex-col px-20">
                <div>
                  <span className="font-semibold">Name: </span>
                  <span className="text-yellow-600">{booking.city}</span>
                </div>
                <div>
                  <span className="font-semibold">City: </span>
                  <span className="text-green-600">{booking.city}</span>
                </div>
                <div>
                  <span className="font-semibold">Date: </span>
                  <span className="text-green-600">
                    {new Date(booking.date_of_reservation).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ReservationsList;
