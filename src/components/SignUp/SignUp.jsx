// SignUp.js
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './SignUp.scss';
import { BiSolidUserCircle, BiSolidKey } from 'react-icons/bi';
import sliderTwo from '../../assets/Images/slide_2.webp';

const SignUp = () => {
  function closeSignUp() {
    const signUpContainer = document.getElementById('sign-up-container');
    signUpContainer.classList.toggle('active');
  }

  function handleLogIn() {
    const logInContainer = document.getElementById('log-in-container');
    logInContainer.classList.toggle('active');
    closeSignUp();
  }

  return (
    <div id="sign-up-container">
      <button type="button" id="close-sign-up" onClick={closeSignUp} aria-label="Close sign up form">
        <FaTimes />
      </button>
      <div id="log-in-image-container">
        <img src={sliderTwo} alt="slider" loading="lazy" />
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
          <div className="login-input-container">
            <BiSolidKey className="input-icon" />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
            />
          </div>
          <button className="submit-button" type="submit">
            SIGN UP
          </button>
        </form>
        <p>Already have an account? </p>
        <button type="button" id="log-in-button" onClick={handleLogIn}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default SignUp;
