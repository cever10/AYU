import React, { useState, useEffect } from "react";
import Header from "./Headerpage/Header";
import NavigationBar from "./Headerpage/NavigationBar";
import YouTube from "react-youtube";


function Main() {
  const [randomVideo, setRandomVideo] = useState(null);

  useEffect(() => {
    const apiKey = "AIzaSyCO0ttHky21UinMY7tFDQw0tYEwl5KDhJE";
    const endpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&order=date&maxResults=20&regionCode=Kr&type=video&key=${apiKey}`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        const videos = data.items;
        const randomIndex = Math.floor(Math.random() * videos.length);
        const selectedVideo = videos[randomIndex];
        setRandomVideo(selectedVideo);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="main-video">
        <Header/>
        <NavigationBar/>
      {randomVideo && (
        <div className="videobar">
          <h1>{randomVideo.snippet.title}</h1>
          <YouTube
            videoId={randomVideo.id.videoId}
            opts={{ width: "560", height: "315" }}
          />
        </div>
      )}
    </div>
  );
}

export default Main;