import React from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";



const NavigationBar  = () => {
    const navItems=[
        {id: 1, title:'홈', link:'/'},
        {id: 2, title:'쇼츠', link:'/short'},
        {id: 3, title:'최근 업로드 영상', link:'/RecentUploades'},
        {id: 4, title:'인기 동영상', link:'/PopularVideos'},
        {id: 5, title:'구독 채널', link:'/SubscribedChannels'},
    ];

    return(
        <nav className="navigation-container">
            <ul>
                {navItems.map((item) =>(
                    <li key={item.id}>
                    <Link to={item.link}> {item.title} </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavigationBar;