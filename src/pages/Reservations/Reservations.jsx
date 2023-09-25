import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../../redux/reducers/reservationsReducer';

function Reservations() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.data);
  const isLoading = useSelector((state) => state.reservations.loading);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  return (
    <div>
      <h2>Reservations</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {reservations.map((reservation) => (
            <li key={reservation.id}>
              <p>
                Date of Reservation:
                {' '}
                {reservation.date_of_reservation}
              </p>
              <p>
                City:
                {' '}
                {reservation.city}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Reservations;
