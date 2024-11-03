import React from 'react';
import './music.css';

function Music() {
  return (
    <div className="musicSection">
      <p>Youtube playlist con mi música</p>
      <iframe
        src="https://www.youtube.com/embed/videoseries?list=PL7rJ2E6QasWm4_KdytjFWO_5YB9R50WJt"
        title="YouTube playlist"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Music;
