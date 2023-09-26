import React, { useState } from 'react';
import axios from 'axios';

function CreatePlaceForm() {
  const [newPlaceName, setNewPlaceName] = useState('');
  const [newPlaceImage, setNewPlaceImage] = useState('');
  const [newPlaceDescription, setNewPlaceDescription] = useState('');

  const handleCreatePlace = async () => {
    try {
      const response = await axios.post('/api/v1/places', {
        place: {
          name: newPlaceName,
          image: newPlaceImage,
          description: newPlaceDescription,
        },
      });

      console.log('New place created:', response.data);
      setNewPlaceName('');
      setNewPlaceImage('');
      setNewPlaceDescription('');
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white mb-4">Create a New Place</h2>
      <input
        type="text"
        placeholder="Place Name"
        value={newPlaceName}
        onChange={(e) => setNewPlaceName(e.target.value)}
        className="mb-2 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={newPlaceImage}
        onChange={(e) => setNewPlaceImage(e.target.value)}
        className="mb-2 p-2 border rounded"
      />
      <textarea
        placeholder="Description"
        value={newPlaceDescription}
        onChange={(e) => setNewPlaceDescription(e.target.value)}
        className="mb-2 p-2 border rounded"
      />
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleCreatePlace}
      >
        Create Place
      </button>
    </div>
  );
}

export default CreatePlaceForm;
