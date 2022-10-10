import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNav from './components/TopNav';
import HomePage from './pages/HomePage';
import SportsPage from './pages/SportsPage';
import MoosicPage from './pages/MoosicPage';
import AboutPage from './pages/AboutPage';
import NerdPage from './pages/NerdPage';

// Top nav is the top nav bar
// Routes controls the 'pages' and what page that renders

function App() {
  return (
    <Router>
      <div className='App'>
        <TopNav/> 
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/nerd' element={<NerdPage/>} />
          <Route path='/moosic' element={<MoosicPage />} />
          <Route path='/sports' element={<SportsPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/sign-up' element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
