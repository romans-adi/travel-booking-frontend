import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CarouselItem from '../../../components/Main/Carousel/CarouselItem';
import '@testing-library/jest-dom';

const sampleItem = {
  id: 1,
  name: 'Item 1',
  description: 'Description 1',
  main_picture: 'image1.jpg',
  travelType: 'Type 1',
};

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

describe('CarouselItem Component', () => {
  it('renders the item correctly', () => {
    const { getByText, getByAltText } = render(
      <Router>
        <Provider store={store}>
          <CarouselItem item={sampleItem} />
        </Provider>
      </Router>,
    );

    const nameElement = getByText(sampleItem.name);
    const descriptionElement = getByText(sampleItem.description);
    const imageElement = getByAltText(sampleItem.name);

    expect(nameElement).toBeTruthy();
    expect(descriptionElement).toBeTruthy();
    expect(imageElement).toBeTruthy();
    expect(imageElement).toHaveAttribute('src', sampleItem.main_picture);
  });

  it('renders a link to the travel page with the correct path', () => {
    const { getByRole } = render(
      <Router>
        <Provider store={store}>
          <CarouselItem item={sampleItem} />
        </Provider>
      </Router>,
    );

    const linkElement = getByRole('link');

    expect(linkElement).toHaveAttribute('href', `/travel/${sampleItem.id}`);
  });
});
