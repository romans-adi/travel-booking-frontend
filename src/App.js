import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React from 'react';
import './App.scss';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Travels from './pages/Travels/Travels';
import Reservation from './pages/Reservation/Reservation';
import MyTravels from './pages/MyTravels/MyTravels';
import AddTravel from './pages/AddTravel/AddTravel';
import DeleteTravel from './pages/DeleteTravel/DeleteTravel';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travels" element={<Travels />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/mytravels" element={<MyTravels />} />
          <Route path="/addtravel" element={<AddTravel />} />
          <Route path="/deletetravel" element={<DeleteTravel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
