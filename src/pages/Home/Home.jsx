/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import './Home.scss';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import sliderOne from '../../assets/Images/slide_1.svg';
import sliderTwo from '../../assets/Images/slide_2.svg';
import sliderThree from '../../assets/Images/slide_3.svg';
import sliderFour from '../../assets/Images/slide_4.svg';
import sliderFive from '../../assets/Images/slide_5.svg';

const imagesArray = [sliderOne, sliderTwo, sliderThree, sliderFour, sliderFive];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const goToNextSlide = () => {
      const newIndex = (index + 1) % imagesArray.length;
      setIndex(newIndex);
    };

    const timer = setInterval(goToNextSlide, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [index]);

  function handleSlide(dotIndex) {
    setIndex(dotIndex);
  }

  return (
    <div id="home-container">
      <HomeSlider sliderImages={imagesArray} slideIndex={index} />
      <h1 id="home-title">Your Dream Travel Agency</h1>
      <p id="home-description">How do you want to start?</p>
      <button type="button" id="explore-button">
        <i className="fa-solid fa-magnifying-glass" />
        {' '}
        Explore Selected Places
      </button>
      <div id="home-buttons">
        <button type="button" id="sign-up-button">Sign Up</button>
        <button type="button" id="log-in-button">Log In</button>
      </div>
      <div className="slide-show-dots">
        {imagesArray.map((_, dotIndex) => (
          <button
            className={dotIndex === index ? 'active-dot' : 'slide-show-dot'}
            type="button"
            key={dotIndex}
            aria-label={`Slide ${dotIndex + 1}`}
            onClick={() => handleSlide(dotIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
