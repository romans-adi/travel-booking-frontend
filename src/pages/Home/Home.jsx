/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Home.scss';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import sliderOne from '../../assets/Images/slide_1.webp';
import sliderTwo from '../../assets/Images/slide_2.webp';
import sliderThree from '../../assets/Images/slide_3.webp';
import sliderFour from '../../assets/Images/slide_4.webp';
import sliderFive from '../../assets/Images/slide_5.webp';
import SignUp from '../../components/SignUp/SignUp';
import LogIn from '../../components/LogIn/LogIn';

const imagesArray = [sliderOne, sliderTwo, sliderThree, sliderFour, sliderFive];

const Home = () => {
  const [index, setIndex] = useState(0);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

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

  function handleSignUp() {
    const signUpContainer = document.getElementById('sign-up-container');
    signUpContainer.classList.toggle('active');
  }

  function handleLogIn() {
    const logInContainer = document.getElementById('log-in-container');
    logInContainer.classList.toggle('active');
  }

  return (
    <div id="home-container">
      <HomeSlider sliderImages={imagesArray} slideIndex={index} />
      <SignUp />
      <LogIn />
      <h1 id="home-title">
        {isAuthenticated ? `Wellcome to Traveli ${user.name} !` : 'Your dream travel agency.'}
        {' '}
      </h1>
      <p id="home-description">How do you want to start?</p>
      <button type="button" id="explore-button">
        <i className="fa-solid fa-magnifying-glass" />
        {' '}
        Explore Selected Places
      </button>
      <div id="home-buttons" style={isAuthenticated ? { display: 'none' } : {}}>
        <button type="button" id="sign-up-button" onClick={handleSignUp}>SIGNUP</button>
        <button type="button" id="log-in-button" onClick={handleLogIn}>LOGIN</button>
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
