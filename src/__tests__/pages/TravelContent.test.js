import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import TravelContent from '../../pages/Travels/TravelContent';
import '@testing-library/jest-dom';

describe('TravelContent Component', () => {
  const selectedTravel = {
    travel_type: 'Adventure',
    price: 500,
    trip_duration: 7,
    group_size: 10,
    image: 'sample.jpg',
    name: 'Sample Destination',
  };

  const randomPlaceImages = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
  ];

  let store;
  const mockStore = configureStore([]);
  const initialState = {
    auth: {
      user: {
        role: 'user',
      },
    },
  };
  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('renders the TravelContent component with valid props', () => {
    const { getByText, getAllByAltText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <TravelContent selectedTravel={selectedTravel} randomPlaceImages={randomPlaceImages} />
        </MemoryRouter>
      </Provider>,
    );

    expect(getByText(selectedTravel.name)).toBeInTheDocument();
    expect(getByText(`£${selectedTravel.price}`)).toBeInTheDocument();
    expect(getByText(`${selectedTravel.trip_duration}`)).toBeInTheDocument();
    expect(getByText(`${selectedTravel.group_size}`)).toBeInTheDocument();

    const images = getAllByAltText(/image\d.jpg/);
    expect(images).toHaveLength(randomPlaceImages.length);
  });

  it('renders the "Discover more places" link', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <TravelContent selectedTravel={selectedTravel} randomPlaceImages={randomPlaceImages} />
        </MemoryRouter>
      </Provider>,
    );

    const discoverLink = getByText('Discover more places');
    expect(discoverLink).toBeInTheDocument();
    expect(discoverLink.getAttribute('href')).toBe('/places');
  });

  it('renders the "Book a Trip" button', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']} basename="">
          <TravelContent selectedTravel={selectedTravel} randomPlaceImages={randomPlaceImages} />
        </MemoryRouter>
      </Provider>,
    );

    const bookButton = getByText('Book a Trip');
    expect(bookButton).toBeInTheDocument();
  });
});
