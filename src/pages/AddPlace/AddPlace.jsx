/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { createPlace, fetchPlaces } from '../../redux/reducers/placesReducer';
import './AddPlace.scss';

function CreatePlaceForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const placesData = useSelector((state) => state.places.data);
  const [bgImage, setBgImage] = useState('');
  const [hasFetchedPlaces, setHasFetchedPlaces] = useState(false);

  useEffect(() => {
    if (!hasFetchedPlaces) {
      dispatch(fetchPlaces());
      setHasFetchedPlaces(true);
    }

    const randomIndex = Math.floor(Math.random() * placesData.length);
    if (placesData[randomIndex]) {
      setBgImage(placesData[randomIndex].main_picture);
    }
  }, [placesData, dispatch, hasFetchedPlaces]);

  const onSubmit = (formData) => {
    dispatch(createPlace(formData));
    navigate('/addtravel');
  };

  return (
    <div
      className="form-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <form className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">First, Add a New Place</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Place Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            {...register('name', { required: 'Name is required' })}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Image URL"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            {...register('main_picture', { required: 'Image URL is required' })}
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Description"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            {...register('description', { required: 'Description is required' })}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring focus:bg-blue-400"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePlaceForm;
