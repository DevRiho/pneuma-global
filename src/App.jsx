import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import { LoadingProvider, usePageLoader } from './context/LoadingContext';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Events = lazy(() => import('./pages/Events'));
const Donation = lazy(() => import('./pages/Donation'));
const Contact = lazy(() => import('./pages/Contact'));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

const GlobalPreloader = () => {
  const { isLoading } = usePageLoader();

  return (
    <div id="preloader" className={isLoading ? '' : 'preloader-hidden'} aria-hidden={!isLoading}>
      <div className="preloader">
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="donation" element={<Donation />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LoadingProvider>
        <GlobalPreloader />
        <Suspense fallback={null}>
          <AppRoutes />
        </Suspense>
      </LoadingProvider>
    </BrowserRouter>
  );
}

export default App;
