import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { configureStore } from 'redux'
// import { configureStore, compose, applyMiddleware } from 'redux'
// import { connect , Provider } from 'react-redux'
import TopNav from './components/TopNav';
import HomePage from './pages/HomePage';
import SportsPage from './pages/SportsPage';
import MoosicPage from './pages/MoosicPage';
import AboutPage from './pages/AboutPage';
import NerdPage from './pages/NerdPage';
import Footer from './components/Footer';
// import themes from './themes';
// import styled, { ThemeProvider } from 'styled-components'
// import rootReducer from './store/reducers';

// Routes controls the 'pages' and what page that renders
function App() {

  // const store = configureStore({ reducer: rootReducer });
  return (
    // <ThemeProvider theme={themes[props.activeTheme]}>
    // <ThemeProvider>
      // * <Provider store={store}>
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
          <Footer/>
        </div>
      </Router>
      // </Provider>
    // </ThemeProvider>
  );
}

// const mapStateToProps = (state) => {
//   return {
//       activeTheme: state.ui.activeTheme,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {

//   }
// }

export default App
// export default connect(mapStateToProps, mapDispatchToProps)(App)
