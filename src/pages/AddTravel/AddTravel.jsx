
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { createTravel } from '../../redux/reducers/travelsReducer';
import { fetchPlaces } from '../../redux/reducers/placesReducer';

function AddTravelForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const placesData = useSelector((state) => state.places.data);
  const [lastPlaceId, setLastPlaceId] = useState('');

  useEffect(() => {
    dispatch(fetchPlaces());
  }, [dispatch]);

  useEffect(() => {
    if (placesData.length > 0) {
      const lastPlace = placesData[placesData.length - 1];
      setLastPlaceId(lastPlace.id);
    }
  }, [placesData]);

  const onSubmit = (formData) => {
    dispatch(createTravel(formData));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-4 p-4 border rounded">
      <h2 className="text-2xl font-semibold mb-4">Now, Add Travel information</h2>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Price"
          {...register('price', { required: 'Price is required' })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Trip Duration"
          {...register('trip_duration', { required: 'Trip Duration is required' })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Group Size"
          {...register('group_size', { required: 'Group Size is required' })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Rating"
          {...register('rating', { required: 'Rating is required' })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Travel Type"
          {...register('travel_type', { required: 'Travel Type is required' })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="hidden"
          placeholder="Place ID"
          {...register('place_id', { required: 'Place ID is required' })}
          className="w-full p-2 border rounded"
          value={lastPlaceId}
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Create Travel
      </button>
    </form>
  );
}

export default AddTravelForm;
