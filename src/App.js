import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BeerList from './Components/HomePage/BeerList';
import BeerDetails from './Components/BeerDetailsPage/BeerDetails';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<BeerList />} />
        <Route path="BeerDetails" element={<BeerDetails />} />
      </Routes>
    </main>
  );
}

export default App;
