import React from 'react'

import { CiCoins1 } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Header() {
    return (
        <header id='header' role='banner'>

            <h1 className='header__logo'>
                <a href='/'>
                    <em aria-hidden='true'></em>
                    <span>webs<br />youtube</span>
                </a>
            </h1>

            <nav className='header__menu'>

                <ul className='menu'>

                    <li>
                        <a href='/today'>
                            <CiMoneyBill /> 추천 영상
                        </a>
                    </li>

                    <li>
                        <a href='/developer'>
                            <CiCoins1 /> 추천 개발자
                        </a>
                    </li>
                    
                </ul>

                <ul className='keyword'>

                    <li>
                        <a href='/search/NewJeans'>music</a>
                    </li>

                </ul>

            </nav>
            
            <div className='header__sns'>

                <ul>
                    <li>
                        <a href='https://github.com/webstoryboy' rel='noopener noreferrer'>
                            <AiFillGithub />
                        </a>
                    </li>

                    <li>
                        <a href='https://www.youtube.com/webstoryboy' rel='noopener noreferrer'>
                            <AiFillYoutube />
                        </a>
                    </li>

                    <li>
                        <a href='https://codepen.io/webstoryboy' rel='noopener noreferrer'>
                            <AiOutlineCodepen />
                        </a>
                    </li>

                    <li>
                        <a href='https://www.instagram.com/webstoryboy' rel='noopener noreferrer'>
                            <AiOutlineInstagram />
                        </a>
                    </li>
                </ul>

            </div>
        </header>
    );
}

export default Header