import { Link } from 'react-router-dom';

const EventCard = ({ event, preview = false }) => {
  const handleRegister = (e) => {
    e.preventDefault();
    if (event.registerMessage) {
      alert(event.registerMessage);
    }
  };

  return (
    <article className="event-card">
      <div className="event-img-wrapper">
        <img src={event.image} alt={event.alt} loading="lazy" decoding="async" />
        <div className="event-date-badge">
          <span>{event.day}</span> {event.month}
        </div>
      </div>
      <div className="event-info">
        <div className="event-meta">
          <div className="event-meta-item">
            <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
            {event.time}
          </div>
          <div className="event-meta-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            {event.location}
          </div>
        </div>
        <h3 className="event-title">
          {preview ? (
            <Link to="/events">{event.title}</Link>
          ) : (
            <a href="#">{event.title}</a>
          )}
        </h3>
        {event.description && !preview && (
          <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '20px', lineHeight: 1.5 }}>
            {event.description}
          </p>
        )}
        {preview ? (
          <Link to="/events" className="readmore-btn">
            Read More
            <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
          </Link>
        ) : (
          <a href="#" className="readmore-btn" onClick={handleRegister}>
            Register Now
            <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
          </a>
        )}
      </div>
    </article>
  );
};

export default EventCard;
