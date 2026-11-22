import { learningTracks } from "@/lib/tracks";

export function TrackGrid() {
  return (
    <div className="track-grid" aria-label="Planned learning tracks">
      {learningTracks.map((track) => (
        <article className="track-card" key={track.id}>
          <div>
            <p className="eyebrow">English → {track.locale}</p>
            <h3>{track.name}</h3>
          </div>
          <span className="status-label">Planned</span>
        </article>
      ))}
    </div>
  );
}
