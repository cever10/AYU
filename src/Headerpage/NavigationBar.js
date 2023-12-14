import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'; 


const NavigationBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/shorts">음악 쇼츠</Link>
        </li>
        <li className="nav-item">
          <Link to="/PopularVideos">인기 급상승</Link>
        </li>
        <li className="nav-item">
          <Link to="/RecentVideos">최근 업로드 영상</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
