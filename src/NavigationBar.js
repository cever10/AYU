import React from "react";
import "./NavigationBar.css";

const NavigationBar  = () => {
    const navigateToHome = () => {
        console.log('Navigate to home');
    };

    const navigateToShortpage = () =>{
        console.log('Navigate to Shortpage');
    };

    const navigateToRecentUploades = () => {
        console.log('Navigate to Recent Uploads');
    };

    const navigateToPopularVideos = () => {
        console.log('Navigate to Popular Videos');
    };

    const navigateToSubscribedChannels = () => {
        console.log('Navigate to Subscribed Channels');
    };

    return(
        <nav className="navigation-container">
            <ul>
                <li onClick={navigateToHome}>
                   <a href="/">홈</a> 
                </li>
                <li onClick={navigateToShortpage}>
                    <a href="/">쇼츠</a> 
                </li>
                <li onClick={navigateToRecentUploades}>
                    <a href="/">최근 업로드 영상</a> 
                </li>
                <li onClick={navigateToPopularVideos}>
                    <a href="/">인기 동영상</a> 
                </li>
                <li onClick={navigateToSubscribedChannels}>
                    <a href="/">구독채널</a> 
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar;