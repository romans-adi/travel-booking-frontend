import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './LogIn.scss';
import { BiSolidUserCircle, BiSolidKey } from 'react-icons/bi';
import sliderOne from '../../assets/Images/slide_1.webp';

const LogIn = () => {
  function closeLogIn() {
    const logInContainer = document.getElementById('log-in-container');
    logInContainer.classList.toggle('active');
  }

  function handleSignUp() {
    const signUpContainer = document.getElementById('sign-up-container');
    signUpContainer.classList.toggle('active');
    closeLogIn();
  }

  return (
    <div id="log-in-container">
      <button type="button" id="close-log-in" onClick={closeLogIn} aria-label="Close log in form">
        <FaTimes />
      </button>
      <div id="log-in-image-container">
        <img src={sliderOne} alt="slider" loading="lazy" />
      </div>
      <div id="log-in-form-container">
        <form>
          <div className="login-input-container">
            <BiSolidUserCircle className="input-icon" />
            <input type="email" id="email" name="email" placeholder="Email" required />
          </div>
          <div className="login-input-container">
            <BiSolidKey className="input-icon" />
            <input type="password" id="password" name="password" placeholder="Password" required />
          </div>
          <button className="submit-button" type="submit">LOGIN</button>
        </form>
        <p>Don&rsquo;t have an account yet? </p>
        <button type="button" id="create-account-button" onClick={handleSignUp}>Create an account</button>
      </div>
    </div>
  );
};

export default LogIn;
