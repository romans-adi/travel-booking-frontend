/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import './LogIn.scss';
import { BiSolidUserCircle, BiSolidKey } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import sliderOne from '../../assets/Images/slide_1.webp';
import { loginUser } from '../../redux/reducers/auth/authActions';

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
  } = useForm();

  function closeLogIn() {
    const logInContainer = document.getElementById('log-in-container');
    logInContainer.classList.toggle('active');
  }

  const onSubmit = (formData) => {
    dispatch(loginUser(formData));
    navigate('/');
    closeLogIn();
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login-input-container">
            <BiSolidUserCircle className="input-icon" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              {...register('email', { required: 'Email is required' })}
            />
          </div>
          <div className="login-input-container">
            <BiSolidKey className="input-icon" />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              {...register('password', { required: 'Password is required' })}
            />
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
