import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../components/mainCarousel/Carousel';

function Main() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const tourData = [
    {
      id: 1,
      title: 'Explore the Charm of Paris',
      description: 'Discover the cultural and architectural wonders of the City of Light',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/800px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
      icons: ['cultural', 'architecture', 'icon3'],
    },
    {
      id: 2,
      title: 'Ski Adventure',
      description: 'Hit the slopes in the Swiss Alps',
      imageUrl: 'https://strapi-images-prod.s3.us-west-1.amazonaws.com/zermatt-matterhorn-switzerland-shutterstock_1298208013_44fea015e5.jpeg',
      icons: ['skiing', 'snowflake', 'mountain'],
    },
    {
      id: 3,
      title: 'Beach Paradise',
      description: 'Relax on the sandy beaches of the Maldives',
      imageUrl: 'https://www.hollywoodreporter.com/wp-content/uploads/2023/03/Maldives-ArrivalJetty-9-H-2023.jpg?w=1024',
      icons: ['beach', 'sun', 'palm-tree'],
    },
    {
      id: 4,
      title: 'Historical Athens',
      description: 'Explore the ancient wonders of Athens',
      imageUrl: 'https://cdn.britannica.com/66/102266-050-FBDEFCA1/acropolis-city-state-Greece-Athens.jpg',
      icons: ['history', 'ruins', 'architecture'],
    },
    {
      id: 5,
      title: 'Safari Adventure',
      description: 'Discover wildlife on a Kenyan safari',
      imageUrl: 'https://i0.wp.com/relaxaroundtheworld.com/wp-content/uploads/2021/10/Kenya-Safari.jpg?fit=1440%2C700&ssl=1',
      icons: ['safari', 'lion', 'elephant'],
    },
    {
      id: 6,
      title: 'Mountain Retreat',
      description: 'Escape to the tranquility of the Rockies',
      imageUrl: 'https://lp-cms-production.imgix.net/2021-12/GettyImages-1136325182.jpg',
      icons: ['mountain', 'nature', 'hiking'],
    },
    {
      id: 7,
      title: 'Tropical Rainforest',
      description: 'Experience the lush beauty of the Amazon',
      imageUrl: 'https://files.adventure-life.com/12/45/06/iStock-CR-hikerrainforest/1300x820.webp',
      icons: ['rainforest', 'jungle', 'bird'],
    },
    {
      id: 8,
      title: 'Island Paradise',
      description: 'Relax in the pristine waters of Bali',
      imageUrl: 'https://balidave.com/wp-content/uploads/2022/11/best-hotel-bali.jpeg',
      icons: ['island', 'beach', 'culture'],
    },
    {
      id: 9,
      title: 'City of Lights',
      description: 'Marvel at the vibrant energy of Tokyo',
      imageUrl: 'https://i0.wp.com/touristjourney.com/wp-content/uploads/2020/02/jezael-melgoza-layMbSJ3YOE-unsplash-scaled.jpg?fit=2560%2C1661&ssl=1',
      icons: ['city', 'neon', 'sushi'],
    },
    {
      id: 10,
      title: 'Desert Adventure',
      description: 'Explore the dunes of the Sahara',
      imageUrl: 'https://www.intrepidtravel.com/adventures/wp-content/uploads/2017/05/FU8A0260-88x450.jpg',
      icons: ['desert', 'camel', 'sand'],
    },
  ];

  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-100 justify-center flex flex-col items-center text-center">
        <header className="flex flex-col items-center text-center mt-10">
          <h1 className="text-4xl font-bold">Most Popular Tours</h1>
          <p className="text-gray-400 font-bold mt-4 relative flex items-center pb-10 mb-10">
            Please select Your Destination
            <span className="border-b-2 border-dotted w-1/2 absolute bottom-0 left-1/4 border-gray-300" />
          </p>
        </header>

        <div className="my-8 px-4 w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tourData.map((tour) => (
              <Item key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 justify-center flex flex-col items-center text-center">
      <header className="flex flex-col items-center text-center mt-10">
        <h1 className="text-4xl font-bold">Most Popular Tours</h1>
        <p className="text-gray-400 font-bold mt-4 relative flex items-center pb-10 mb-10">
          Please select Your Destination
          <span className="border-b-2 border-dotted w-1/2 absolute bottom-0 left-1/4 border-gray-300" />
        </p>
      </header>

      <div className="my-8 px-4 w-3/4">
        <Carousel items={tourData} />
      </div>
    </div>
  );
}

function Item({ tour }) {
  return (
    <div className="md:w-96 items-center text-center">
      <div
        className="w-full h-52 rounded-lg bg-cover bg-center"
        style={{
          backgroundImage: `url(${tour.imageUrl})`,
        }}
      />
      <h2 className="text-xl font-semibold mt-4">{tour.title}</h2>
      <p className="text-gray-500">{tour.description}</p>
    </div>
  );
}

Item.propTypes = {
  tour: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    icons: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Main;
