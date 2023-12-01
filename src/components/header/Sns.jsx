//import { snsLink } from '../../data/header'

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

function Sns() {
    return (
        <div className='header__sns'>
            <ul>
                {snsLink.map((sns, key) => (
                    <li key={key}>
                        <a 
                            href={sns.url} 
                            target='_black' 
                            rel='noopener noreferrer' 
                            aria-label={sns.title}
                        >
                            <span>{sns.icon}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sns