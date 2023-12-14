import React, { useState } from "react";
import axios from "axios";
import NavigationBar from "../../Headerpage/NavigationBar";
import Header from "../../Headerpage/Header";

function YouTubeSearch() {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            key: "AIzaSyCO0ttHky21UinMY7tFDQw0tYEwl5KDhJE",
            q: query,
            part: "snippet",
            maxResults: 5,
            type: "video",
          },
        }
      );
      setVideos(response.data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
       <Header/><NavigationBar/>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          maxLength="20"
          className="search_input"
          name="search"
          placeholder="검색어를 입력해주세요."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input type="submit" value="검색" className="search_submit" />
      </form>

      <div className="videos">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video">
            <iframe
              title={video.snippet.title}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YouTubeSearch;