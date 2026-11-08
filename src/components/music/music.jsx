import { useState } from 'react';
import './music.css';
import youtubeLinks from '../../data/youtubeLinks.json';

function Music() {
  const videos = Object.entries(youtubeLinks).map(([title, url]) => ({
    title,
    id: new URL(url).pathname.slice(1),
  }));

  const [selected, setSelected] = useState(videos[0]);

  return (
    <div className="musicSection">
      <p>Playlist das minhas músicas</p>

      <div className="musicSection-featured">
        <iframe
          key={selected.id}
          src={`https://www.youtube.com/embed/${selected.id}`}
          title={selected.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="musicSection-featuredTitle">{selected.title}</p>
      </div>

      <div className="musicSection-grid">
        {videos.map((video) => (
          <button
            type="button"
            className={`musicSection-card ${selected.id === video.id ? 'musicSection-card--active' : ''}`}
            key={video.id}
            aria-pressed={selected.id === video.id}
            onClick={() => setSelected(video)}
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
              alt=""
            />
            <span className="musicSection-cardTitle">{video.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Music;
