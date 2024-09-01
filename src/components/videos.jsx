import React, { useState } from 'react';
import './videos.css';

function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    { id: 1, thumbnail: '/videothumbnails/1.jpg', src: '/videos/1.mp4' },
    { id: 2, thumbnail: '/videothumbnails/2.jpg', src: '/videos/2.mp4' },
    { id: 3, thumbnail: '/videothumbnails/3.jpg', src: '/videos/3.mp4' },
    { id: 4, thumbnail: '/videothumbnails/4.jpg', src: '/videos/4.mp4' },
    { id: 5, thumbnail: '/videothumbnails/5.jpg', src: '/videos/5.mp4' },
    { id: 6, thumbnail: '/videothumbnails/6.jpg', src: '/videos/6.mp4' },
    { id: 7, thumbnail: '/videothumbnails/7.jpg', src: '/videos/7.mp4' },
    { id: 8, thumbnail: '/videothumbnails/9.jpg', src: '/videos/9.mp4' },
    { id: 10, thumbnail: '/videothumbnails/10.jpg', src: '/videos/10.mp4' },
    { id: 11, thumbnail: '/videothumbnails/11.jpg', src: '/videos/11.mp4' },
    { id: 12, thumbnail: '/videothumbnails/12.jpg', src: '/videos/12.mp4' },
    { id: 13, thumbnail: '/videothumbnails/13.jpg', src: '/videos/13.mp4' },
    { id: 14, thumbnail: '/videothumbnails/14.jpg', src: '/videos/14.mp4' },
    { id: 15, thumbnail: '/videothumbnails/15.jpg', src: '/videos/15.mp4' },
  ];

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="videos-page">
      <div className="video-grid">
        {videos.map((video) => (
          <div
            key={video.id}
            className="video-item"
            style={{ backgroundImage: `url(${video.thumbnail})` }}
            onClick={() => handleVideoClick(video)}
          >
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="video-modal" onClick={closeVideo}>
          <video controls autoPlay className="video-player">
            <source src={selectedVideo.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button className="close-button" onClick={closeVideo}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Videos;
