import './App.css';
import React from 'react';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Shortpage from './ShortsPage';
import HomePage from './HomePage';

function App () {
  return (
    <BrowserRouter>
    <header/>
    <main>
    <Routes>

        {/*네비게이션 바 여기에*/}
          <Route exact path="/" Component={HomePage}/>
          <Route path="/Short"Component={Shortpage} />
   </Routes>
   </main>
   </BrowserRouter>
  );
};

export default App;
