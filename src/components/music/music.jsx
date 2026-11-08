import { useRef, useState } from 'react';
import youtubeLinks from '../../data/youtubeLinks.json';
import './music.css';

const tracks = Object.entries(youtubeLinks).map(([title, url]) => ({
  title,
  id: new URL(url).pathname.slice(1),
}));

function Music() {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  const playerRef = useRef(null);

  const current = tracks[index];

  const playTrack = (trackIndex) => {
    setIndex((trackIndex + tracks.length) % tracks.length);
    setAutoplay(true);
    playerRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  return (
    <div className="page">
      <header className="page-header music-header">
        <p className="eyebrow">Eta Argus</p>
        <h1 className="page-title">Music</h1>
      </header>

      <div className="music">
        <section className="music-player" aria-label="Player">
          <div className="music-video" ref={playerRef}>
            <iframe
              key={current.id}
              src={`https://www.youtube.com/embed/${current.id}${autoplay ? '?autoplay=1' : ''}`}
              title={current.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="music-controls">
            <div className="music-nowPlaying">
              <p className="meta">
                Track {index + 1} of {tracks.length}
              </p>
              <h2 className="music-currentTitle">{current.title}</h2>
            </div>
            <div className="music-buttons">
              <button
                type="button"
                className="btn btn--secondary"
                onClick={() => playTrack(index - 1)}
              >
                Previous
              </button>
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => playTrack(index + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </section>

        <section className="music-tracks" aria-label="Track list">
          {tracks.map((track, trackIndex) => (
            <button
              type="button"
              className={`music-track ${trackIndex === index ? 'music-track--active' : ''}`}
              key={track.id}
              aria-pressed={trackIndex === index}
              onClick={() => playTrack(trackIndex)}
            >
              <span className="music-trackNumber">
                {String(trackIndex + 1).padStart(2, '0')}
              </span>
              <span className="music-trackTitle">{track.title}</span>
            </button>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Music;
