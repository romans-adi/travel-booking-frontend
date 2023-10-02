import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings, removeBooking } from '../../redux/reducers/bookingReducer';
import { fetchPlaces } from '../../redux/reducers/placesReducer';
import { fetchTravels } from '../../redux/reducers/travelsReducer';
import ReservationListItem from '../../components/Reservations/ReservationsItem';
import '../../App.scss';

function ReservationsList() {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places.data);
  const bookings = useSelector((state) => state.bookings.data);
  const travels = useSelector((state) => state.travels.data);
  const loading = useSelector((state) => state.bookings.loading);
  const [backgroundImage, setBackgroundImage] = useState('');
  const error = useSelector((state) => state.bookings.error);

  const handleUnbook = (reservationId) => {
    dispatch(removeBooking(reservationId));
  };

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        await dispatch(fetchBookings());
        await dispatch(fetchPlaces());
        await dispatch(fetchTravels());
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchAllData();
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
        <h2 className="text-4xl font-bold text-white text-center pb-8 w-3/5 border-b-2-white my-10">My Reservations</h2>
        {loading && <p className="text-white">Loading...</p>}
        {error && (
          <p className="text-white">
            Error:
            {' '}
            {error}
          </p>
        )}
        <ul className="w-3/4 text-left text-white overflow-y-auto">
          {bookings && bookings.length > 0 ? (
            bookings.map((booking) => (
              <ReservationListItem
                key={booking.id}
                booking={booking}
                place={places.find((place) => place.name === booking.city)}
                travel={travels}
                onUnbook={handleUnbook}
              />
            ))
          ) : (
            <p className="text-white text-center text-2xl">No reservations found.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ReservationsList;
