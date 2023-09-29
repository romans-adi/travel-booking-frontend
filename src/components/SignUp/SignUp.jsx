/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import './SignUp.scss';
import { BiSolidUserCircle, BiSolidKey, BiLogoGmail } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../redux/reducers/auth/authActions';
import sliderTwo from '../../assets/Images/slide_2.webp';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function closeSignUp() {
    const signUpContainer = document.getElementById('sign-up-container');
    signUpContainer.classList.toggle('active');
  }

  function handleLogIn() {
    const logInContainer = document.getElementById('log-in-container');
    logInContainer.classList.toggle('active');
    closeSignUp();
  }

  const onSubmit = (formData) => {
    dispatch(registerUser(formData));
    navigate('/');
    closeSignUp();
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }, // Access form errors
  } = useForm();

  return (
    <div id="sign-up-container">
      <button type="button" id="close-sign-up" onClick={closeSignUp} aria-label="Close sign up form">
        <FaTimes />
      </button>
      <div id="log-in-image-container">
        <img src={sliderTwo} alt="slider" loading="lazy" />
      </div>
      <div id="log-in-form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login-input-container">
            <BiSolidUserCircle className="input-icon" />
            <input
              type="text"
              id="name-input"
              name="name"
              placeholder="Full Name"
              {...register('name', { required: 'Name is required' })}
            />
          </div>
          {errors.name && <p className="error-message">{`* ${errors.name.message}`}</p>}
          <div className="login-input-container">
            <BiLogoGmail className="input-icon" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
          </div>
          {errors.email && <p className="error-message">{`* ${errors.email.message}`}</p>}
          <div className="login-input-container">
            <BiSolidKey className="input-icon" />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              {...register('password', { required: 'Introduce your password' })}
            />
          </div>
          {errors.password && <p className="error-message">{`* ${errors.password.message}`}</p>}
          <div className="login-input-container">
            <BiSolidKey className="input-icon" />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              {...register('password_confirmation', {
                required: 'Confirm your password',
                validate: (value) => value === getValues('password') || 'Passwords do not match',
              })}
            />
          </div>
          {errors.password_confirmation && (
              <p className="error-message">{`* ${errors.password_confirmation.message}`}</p>
            )}
          <button className="submit-button" type="submit">
            SIGN UP
          </button>
        </form>
        <p className="sign-up-text">Already have an account? </p>
        <button type="button" id="log-in-button" onClick={handleLogIn}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default SignUp;
