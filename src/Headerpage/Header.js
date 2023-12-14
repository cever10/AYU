import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Search from '../page/searchpage/Search';

const Header = () => {
  return (
    <header>
      <div className="img">
          <img  className="any" alt="logo" src="https://i.namu.wiki/i/aPZtbqInG3YpAN74PShT2B004t47SREVPBH6pK2Sl0Z0PH4Wtt1FBPCLew9-D48VDgj6VbjrG9v1ysMdoF6pwg.webp" />
      </div>
      <div className="logo">
        <Link to="/">1조 유튜브</Link>
      </div>
      
      <div className="search">
        <Search/>
      </div>
    </header>
  );
};

export default Header;
