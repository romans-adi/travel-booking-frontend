// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React from 'react';
import './App.scss';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Main from './pages/Main/Main';
import Reservation from './pages/Reservation/Reservation';
import MyBooking from './pages/MyBooking/MyBooking';
import BookTravel from './pages/BookTravel/BookTravel';
import RemoveTravel from './pages/RemoveTravel/RemoveTravel';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Main />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/myBooking" element={<MyBooking />} />
          <Route path="/booktravel" element={<BookTravel />} />
          <Route path="/removetravel" element={<RemoveTravel />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
