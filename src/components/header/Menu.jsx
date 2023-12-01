import React from 'react'

//import { headerMenus} from '../../data/header'

//--------------------------------------------------------------------//
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";


const headerMenus = [
    {
        title: "홈",
        icon: <CiMoneyBill />,
        src: "/"
    },

    {
        title: "쇼츠",
        icon: <CiMoneyBill />,
        src: "/shorts"
    },

    {
        title: "추천 영상",
        icon: <CiMoneyBill />,
        src: "/today"
    },

    {
        title: "추천 개발자",
        icon: <CiMoneyBill />,
        src: "/developer"
    },

    {
        title: "인기 급상승",
        icon: <CiMoneyBill />,
        src: "/popular"
    },

    {
        title: "채널",
        icon: <CiMoneyBill />,
        src: "/channel"
    },
];

const snsLink = [
    {
        title: "github",
        url: "https://github.com/webstoryboy",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com/webstoryboy",
        icon: <AiFillYoutube />
    },
    {
        title: "codepen",
        url: "https://codepen.io/webstoryboy",
        icon: <AiOutlineCodepen />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/webstoryboy",
        icon: <AiOutlineInstagram />
    },
]
//--------------------------------------------------------------------//

import { Link, useLocation } from 'react-router-dom'

function Menu() {
    const location = useLocation();

    return (
        <nav className='header__menu'>
            <ul className='menu'>
                {headerMenus.map((menu, key) => (
                    <li key={key} className={location.pathname === menu.src ? 'active' : ''}>
                        <Link to={menu.src}>
                            {menu.icon}{menu.title}
                        </Link>
                    </li>
                ))}
            </ul>

            {/*보류코드
            <ul className='keyword'>
                {searchKeyword.map((keyword, key) => (
                    <li key={key} className={location.pathname === keyword.src ? 'active' : ''}>
                        <Link to={keyword.src}>
                            {keyword.title}
                        </Link>
                    </li>
                ))}
            </ul>
            */}
        </nav>
    );
}

export default Menu