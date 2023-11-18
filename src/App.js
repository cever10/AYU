import './App.css';
import React from 'react';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Shortpage from './pages/ShortsPage';
import HomePage from './pages/HomePage';

function App () {
  return (
    <BrowserRouter>
    <header/>
    <main>
    <Routes>

          <Route exact path="/" Component={HomePage}/>
          <Route path="/Short"Component={Shortpage} />
   </Routes>
   </main>
   </BrowserRouter>
  );
};

export default App;
