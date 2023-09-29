/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { authSuccess } from './redux/reducers/auth/authSlice';
import './App.scss';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Main from './pages/Main/Main';
import Reservation from './pages/Reservation/Reservation';
import MyBooking from './pages/MyBooking/MyBooking';
import BookTravel from './pages/BookTravel/BookTravel';
import RemoveTravel from './pages/RemoveTravel/RemoveTravel';
import TravelsDetails from './pages/Details/TravelsDetails';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (token && user) {
      dispatch(authSuccess({ token, user }));
    }
  });

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Main />} />
          <Route path="/travel/:travelId" element={<TravelsDetails />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/myBooking" element={<MyBooking />} />
          <Route path="/booktravel" element={<BookTravel />} />
          <Route path="/removetravel" element={<RemoveTravel />} />
        </Routes>
        <Toaster />
      </Router>
    </div>
  );
}
export default App;
