/* eslint-disable react/jsx-props-no-spreading */
// AddTravelForm.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createTravel } from '../../redux/reducers/travelsReducer';
import { fetchPlaces } from '../../redux/reducers/placesReducer';

function AddTravelForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const placesData = useSelector((state) => state.places.data);
  const [lastPlaceId, setLastPlaceId] = useState('');
  const [bgImage, setBgImage] = useState('');
  const navigate = useNavigate();

  const travelTypes = ['cultural', 'beach', 'history', 'skiing', 'safari', 'mountain', 'rainforest', 'city', 'desert'];

  useEffect(() => {
    const getLastPlaceId = async () => {
      await dispatch(fetchPlaces()).then(() => {
        if (placesData.length > 0) {
          const lastPlace = placesData[placesData.length - 1];
          console.log(lastPlace.id);
          setLastPlaceId(lastPlace.id);
          const randomIndex = Math.floor(Math.random() * placesData.length);
          if (placesData[randomIndex]) {
            setBgImage(placesData[randomIndex].main_picture);
          }
        }
      });
    };
    getLastPlaceId();
  }, [dispatch]);

  const onSubmit = (formData) => {
    dispatch(createTravel(formData));
    navigate(`/travel/${formData.place_id}`);
  };

  return (
    <div
      className="form-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-4 p-4 border rounded">
        <h2 className="text-2xl font-semibold mb-4">Now, Add Travel Information</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            {...register('name', { required: 'Name is required' })}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Image URL"
            {...register('image', { required: 'Image URL is required' })}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="float"
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
          <select
            {...register('travel_type', { required: 'Travel Type is required' })}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Travel Type</option>
            {travelTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Place ID"
            className="w-full p-2 border rounded"
            {...register('place_id', { required: 'Place ID is required' })}
            value={lastPlaceId}
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-auto">
          Create Travel
        </button>
      </form>
    </div>
  );
}

export default AddTravelForm;
