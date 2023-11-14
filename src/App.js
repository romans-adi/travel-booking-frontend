import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { authSuccess, logout } from './redux/reducers/auth/authSlice';
import './App.scss';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Main from './pages/Main/Main';
import Booking from './pages/Booking/Booking';
import ReservationsList from './pages/Reservations/ReservationsList';
import Travel from './pages/Travels/Travel';
import AddTravel from './pages/AddTravel/AddTravel';
import AddPlace from './pages/AddPlace/AddPlace';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (token && user) {
      dispatch(authSuccess({ token, user }));
    } else if (!token) {
      dispatch(logout());
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  });

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Main />} />
          <Route path="/travel/:travelId" element={<Travel />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/reservations" element={<ReservationsList />} />
          <Route path="/addtravel" element={<AddTravel />} />
          <Route path="/addplace" element={<AddPlace />} />
        </Routes>
        <Toaster />
      </Router>
    </div>
  );
};
export default App;
