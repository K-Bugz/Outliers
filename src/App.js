import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TopNav from './components/TopNav';
import HomePage from './pages/HomePage';
import SportsPage from './pages/SportsPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <TopNav/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/sports' element={<SportsPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
