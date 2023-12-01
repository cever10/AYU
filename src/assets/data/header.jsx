//미사용 코드
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";


export const headerMenus = [
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

export const searchKeyword = [
    {
        title: "webstoryboy",
        src: "/search/webstoryboy"
    },

    {
        title: "HTML",
        src: "/search/html"
    },

    {
        title: "CSS",
        src: "/search/css"
    },

    {
        title: "JavaScript",
        src: "/search/javascript"
    },

    {
        title: "React.js",
        src: "/search/react.js"
    },

    {
        title: "Vue.js",
        src: "/search/vue.js"
    },

    {
        title: "Next.js",
        src: "/search/next.js"
    },

    {
        title: "Node.js",
        src: "/search/node.js"
    },

    {
        title: "SQL",
        src: "/search/sql"
    },

    {
        title: "portfolio",
        src: "/search/React Portfolio"
    },

    {
        title: "music",
        src: "/search/NewJeans"
    }
];

export const snsLink = [
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