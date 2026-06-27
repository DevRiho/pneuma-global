import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const LoadingContext = createContext({
  isLoading: false,
  startLoading: () => {},
});

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const initialLoadFinished = useRef(false);
  const location = useLocation();

  const startLoading = useCallback(() => {
    if (initialLoadFinished.current) {
      setIsLoading(true);
    }
  }, []);

  useEffect(() => {
    const finishInitialLoad = () => {
      window.setTimeout(() => {
        initialLoadFinished.current = true;
        setIsLoading(false);
      }, 450);
    };

    if (document.readyState === 'complete') {
      finishInitialLoad();
      return undefined;
    }

    window.addEventListener('load', finishInitialLoad);

    return () => window.removeEventListener('load', finishInitialLoad);
  }, []);

  useEffect(() => {
    if (!initialLoadFinished.current) {
      return undefined;
    }

    setIsLoading(true);

    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 850);

    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  const value = useMemo(() => ({ isLoading, startLoading }), [isLoading, startLoading]);

  return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>;
};

export const usePageLoader = () => useContext(LoadingContext);
