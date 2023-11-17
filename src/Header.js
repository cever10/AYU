import React from "react";
import './Header.css';

const Header = () => {
    const handleSearch = () => {
        console.log('검색');
    };
    return(

        <header className="header-container">
              {/*검색바*/}
              <div class="search-container">
              <img className="logo" src="https://blog.kakaocdn.net/dn/b0azSG/btqyG765NjX/bsdiyTTCfnyzM7zosKRMk0/img.jpg" alt="logo" />
              <input type="text" placeholder="검색" class="search-input" />
              <button onClick={handleSearch} class="search-button">검색</button>


              </div>
        </header>
    );
};

export default Header;
