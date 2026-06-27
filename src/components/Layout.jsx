import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
    <CookieBanner />
  </>
);

export default Layout;
