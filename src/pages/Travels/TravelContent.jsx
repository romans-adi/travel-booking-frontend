import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function validateArray(props, propName, componentName) {
  if (!Array.isArray(props[propName])) {
    return new Error(`Invalid prop '${propName}' supplied to '${componentName}'. It should be an array.`);
  }
  return null;
}

function TravelContent({ selectedTravel, randomPlaceImages }) {
  return (
    <div className="flex items-stretch mx-auto h-96 md:h-screen w-full px-16 gap-16 pt-20 lg:pb-40 lg:py-40 relative justify-center flex-wrap lg:flex-nowrap">
      <img
        src={selectedTravel?.image}
        alt={selectedTravel?.name}
        className="w-2/3 max-w-xl max-h-full drop-shadow-4xl shadow-4xl"
      />
      <div className="w-full lg:w-1/3 rounded-lg flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-right uppercase">
            {selectedTravel?.name}
            <br />
            <span className="font-semibold text-right lowercase text-red-600 text-xs">25% offer to new customers!</span>
          </h2>
          <div className="mt-4 w-full">
            <div className="flex flex-col text-sm text-second">
              <div className="flex justify-between items-center bg-gray-200 px-4 py-2">
                <span>Travel Type</span>
                <span>{selectedTravel.travel_type}</span>
              </div>
              <div className="flex justify-between items-center bg-white px-4 py-2">
                <span>Price</span>
                <span>
                  £
                  {selectedTravel.price}
                </span>
              </div>
              <div className="flex justify-between items-center bg-gray-200 px-4 py-2">
                <span>Trip Duration (days)</span>
                <span>{selectedTravel.trip_duration}</span>
              </div>
              <div className="flex justify-between items-center bg-white px-4 py-2">
                <span>Group Size:</span>
                <span>{selectedTravel.group_size}</span>
              </div>
            </div>
          </div>
          <div className="text-md my-8">
            <span className="font-bold text-second uppercase">New destinations </span>
            for less than £99.99
          </div>
          <div className="mt-4 flex justify-end">
            <a href="/places" className="text-black font-bold uppercase">
              Discover more places
              {' '}
              <span className="text-yellow-600">&gt;</span>
            </a>
          </div>
        </div>
        <div className="mt-4 mb-2 flex w-2/3 self-end flex-wrap items-center justify-end">
          {randomPlaceImages.map((imageUrl) => (
            <img
              key={imageUrl}
              src={imageUrl}
              alt={`${imageUrl}`}
              className="w-10 h-10 object-cover"
            />
          ))}
        </div>
        <Link to="/booking" className="flex self-end w-44 my-8 lg:my-4">
          <button
            type="button"
            className="flex-grow px-6 py-4 m-0 rounded-full text-sm bg-main text-white hover:bg-second hover:text-white font-semibold w-full self-end border-2-white relative"
          >
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transarent rounded-full w-6 h-6 flex items-center justify-center">
              <span className="text-white font-bold text-xl">&#127903;</span>
            </div>
            Book a Trip
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transarent rounded-full w-6 h-6 flex items-center justify-center border-2-white">
              <span className="text-white font-bold text-sm">&gt;</span>
            </div>
          </button>
        </Link>
      </div>
      <Link to="/places">
        <button
          type="button"
          className="rounded-r-full h-14 w-20 bg-gray-300 hover:bg-main text-white left-0 absolute bottom-0 transform -translate-y-1/2 outline-none transition duration-700 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 transform ml-8 rotate-180"
          >
            <polygon points="5 2 17 12 5 22" fill="none" />
          </svg>
        </button>
      </Link>
    </div>
  );
}

TravelContent.propTypes = {
  selectedTravel: PropTypes.shape({
    travel_type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    trip_duration: PropTypes.number.isRequired,
    group_size: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  randomPlaceImages: validateArray,
};

TravelContent.defaultProps = {
  randomPlaceImages: [],
};

export default TravelContent;
