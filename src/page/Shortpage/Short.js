import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Main from '../../Main';

const Shorts = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const playerRef = useRef(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/search',
          {
            params: {
              key: 'AIzaSyCO0ttHky21UinMY7tFDQw0tYEwl5KDhJE',
              part: 'snippet',
              maxResults: 100, 
              type: 'video',
              regionCode:'kr',
              q: '플레이리스트, k-뮤비', 
            },
          }
        );

        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  const playNextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex((prevIndex) => prevIndex + 1);
    }
  };

  const playPreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex((prevIndex) => prevIndex - 1);
    }
  };


  return (
    <div>
      <Main/>
      <h1>플레이리스트</h1>
      <div>
        <button onClick={playPreviousVideo}>이전</button>
        <button onClick={playNextVideo}>다음</button>
      </div>
      <div>
        <iframe
          title={videos[currentVideoIndex]?.snippet.title || 'Video Player'}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videos[currentVideoIndex]?.id?.videoId}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          ref={playerRef}
        ></iframe>
      </div>
    </div>
  );
};

export default Shorts;