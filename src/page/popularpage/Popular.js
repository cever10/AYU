import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import Main from "../../Main";

function PopularVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const apiKey = "AIzaSyCO0ttHky21UinMY7tFDQw0tYEwl5KDhJE"; // 발급받은 API 키로 대체
    const endpoint = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=15&key=${apiKey}`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <Main/>
      <h1>인기 동영상 목록</h1>
      <div className="video-list">
        {videos.map((video) => (
          <div key={video.id}>
            <h2>{video.snippet.title}</h2>
            <YouTube
              videoId={video.id}
              opts={{ width: "560", height: "315" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularVideos;
