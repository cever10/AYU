import React from 'react'

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
                        <a href='/'>
                            <CiMoneyBill /> 홈
                        </a>
                    </li>

                    <li>
                        <a href='/shorts'>
                            <CiMoneyBill /> 쇼츠
                        </a>
                    </li>

                    <li>
                        <a href='/today'>
                            <CiMoneyBill /> 추천 영상
                        </a>
                    </li>

                    <li>
                        <a href='/developer'>
                            <CiMoneyBill /> 추천 개발자
                        </a>
                    </li>

                    <li>
                        <a href='/developer'>
                            <CiMoneyBill /> 추천 개발자
                        </a>
                    </li>

                    <li>
                        <a href='/popular'>
                            <CiMoneyBill /> 인기 급상승
                        </a>
                    </li>

                    <li>
                        <a href='/channel'>
                            <CiMoneyBill /> 채널
                        </a>
                    </li>
                    
                </ul>

                {/* 보류코드
                <ul className='keyword'>

                    <li>
                        <a href='/search/NewJeans'>music</a>
                    </li>

                </ul>
                */}
                

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