import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings, createBooking } from '../../redux/reducers/bookingReducer';
import { fetchPlaces } from '../../redux/reducers/placesReducer';
import SelectInput from '../../components/Booking/SelectInput';
import DateInput from '../../components/Booking/DateInput';
import BookNowButton from '../../components/Booking/BookButton';
import '../../App.scss';

function Bookings() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.bookings.loading);
  const places = useSelector((state) => state.places.data);
  const [selectedPlace, setSelectedPlace] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');

  const handleCreateBooking = async () => {
    try {
      dispatch(
        createBooking({
          dateOfBooking: selectedDate,
          city: selectedPlace,
          userId: 1,
          travelId: 1,
        }),
      );
    } catch (error) {
      console.error('API Error:', error);
    }
  };

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
      className="relative w-full h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: '1',
      }}
    >
      <div className="bg-opacity-80 bg-main z-20 absolute inset-0" />
      <div className="container mx-auto p-4 relative z-40 justify-center items-center flex flex-col">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Book your Travel!</h2>
        <p className="text-sm font-semibold text-white my-4 mb-10 text-center w-3/4 items-center justify-center leading-8">
          Explore our curated list of incredible destinations and create lasting memories.
          Whether you&apos;re a solo adventurer, a couple seeking romance, or a
          family in search of fun, we have the perfect trip waiting for you.
          Choose your desired city, pick your travel date,
          and you&apos;re on your way to an amazing experience.
          We offer a wide range of destinations,
          from skiing resorts to desert adventures and sunny beaches.
          We handle all the details, from reservations to transfers,
          so you can focus on making memories.
        </p>
        {isLoading ? (
          <p className="text-white">Loading...</p>
        ) : null}

        <div className="flex justify-center items-center flex-col">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 mb-6">
            <SelectInput
              selectedPlace={selectedPlace}
              setSelectedPlace={setSelectedPlace}
              places={places}
            />
            <DateInput selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          </div>
          <BookNowButton handleCreateBooking={handleCreateBooking} />
        </div>
      </div>
    </div>
  );
}

export default Bookings;
