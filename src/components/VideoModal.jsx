import { useEffect } from 'react';

const VideoModal = ({ videoId, onClose }) => {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div className="video-modal active" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="video-modal-content">
        <button className="video-modal-close" onClick={onClose} aria-label="Close modal">&times;</button>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Pneuma Global Video"
        />
      </div>
    </div>
  );
};

export default VideoModal;
