import { useEffect, useState } from 'react';

const STORAGE_KEY = 'pneuma_cookie_consent';

const CookieBanner = () => {
  const [consent, setConsent] = useState(() => localStorage.getItem(STORAGE_KEY));
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [consent]);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setConsent('accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setConsent('declined');
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div className="cookie-banner" style={{ display: 'flex' }}>
          <p>We use cookies to improve your user experience on our site. By continuing to browse, you agree to our cookie policy.</p>
          <div className="cookie-banner-btns">
            <button type="button" className="cookie-btn-accept" onClick={handleAccept}>Accept</button>
            <button type="button" className="cookie-btn-decline" onClick={handleDecline}>Decline</button>
          </div>
        </div>
      )}

      {consent && !showBanner && (
        <button
          type="button"
          className="cookie-reconsent-btn"
          style={{ display: 'flex' }}
          title="Manage Cookie Preferences"
          onClick={() => setShowBanner(true)}
        >
          <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h-2v-2h4v8zm0-10h-2V5h2v2z"/></svg>
        </button>
      )}
    </>
  );
};

export default CookieBanner;
