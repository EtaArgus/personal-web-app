import { useState } from 'react';
import './music.css';
import youtubeLinks from '../../data/youtubeLinks.json';

function Music() {
  const videos = Object.entries(youtubeLinks).map(([title, url]) => ({
    title,
    id: url.split('/').pop(),
  }));

  const [selected, setSelected] = useState(videos[0]);

  return (
    <div className="musicSection">
      <p>Playlist das minhas músicas</p>

      <div className="musicSection-featured">
        <iframe
          src={`https://www.youtube.com/embed/${selected.id}`}
          title={selected.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="musicSection-featuredTitle">{selected.title}</p>
      </div>

      <div className="musicSection-grid">
        {videos.map((video) => (
          <div
            className={`musicSection-card ${selected.id === video.id ? 'musicSection-card--active' : ''}`}
            key={video.id}
            onClick={() => setSelected(video)}
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
              alt={video.title}
            />
            <p className="musicSection-cardTitle">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Music;
