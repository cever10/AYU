import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecentVideos from './page/Recentpage/Recent';
import Shorts from './page/Shortpage/Short';
import Main from './Main';
import PopularVideos from './page/popularpage/Popular';
import YouTubeSearch from './page/searchpage/Search';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Main />} />
    <Route path='/recentvideos' element={<RecentVideos />} />
    <Route path='/shorts' element={<Shorts />} />
    <Route path='/popularvideos' element={<PopularVideos />} />
    <Route path='/YouTubeSearch/:YouTubeSearchID' element={<YouTubeSearch />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
