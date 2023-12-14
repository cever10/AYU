import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import Header from "../../Headerpage/Header";
import NavigationBar from "../../Headerpage/NavigationBar";

function RecentVideos() {
    const [videos, setVideos] = useState([]);
  
    useEffect(() => {
      const apiKey = "AIzaSyCO0ttHky21UinMY7tFDQw0tYEwl5KDhJE";
      const endpoint =`https://www.googleapis.com/youtube/v3/search?part=snippet&order=date&maxResults=10&regionCode=Kr&type=video&key=${apiKey}`;
  
      fetch(endpoint)
        .then((response) => response.json())
        .then((data) => {
          setVideos(data.items);
        })
        .catch((error) => console.error("Error:", error));
    }, []);
  
return(
    <div className="video-list-container">
    <Header/><NavigationBar/>
    <h1>최근 업로드된 동영상 목록</h1>
    <div className="video-list">
      {videos.map((video) => (
        <div key={video.id.videoId} className="video-item">
          <h2>{video.snippet.title.substring(0, 40)}...</h2>
          <YouTube
            videoId={video.id.videoId}
            opts={{ width: "280", height: "157.5" }} />

          </div>
        ))}
      </div>
    </div>
    );
};

export default RecentVideos;




