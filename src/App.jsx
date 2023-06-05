import './styles/App.css';
import './styles/style.css';

import { Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/layout/HeaderComponent';
import HomePage from './pages/HomePage';
import FooterComponent from './components/layout/FooterComponent';
import AllProducts from './pages/AllProducts';
import { laptops, customPcs, monitors, desktops } from './data/data';
import SingleProductPage from './pages/SingleProductPage';
import ContactUs from './pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import AboutUs from './pages/AboutUs';

const allPrd = [
  ...laptops.slice(1),
  ...customPcs.slice(1),
  ...monitors.slice(1),
  ...desktops.slice(1),
];

function App() {
  return (
    <div>
      <ScrollToTop />
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route
          path="all-products/laptops"
          element={<AllProducts products={laptops} />}
        />
        <Route
          path="all-products/custom-pcs"
          element={<AllProducts products={customPcs} />}
        />
        <Route
          path="all-products/monitors"
          element={<AllProducts products={monitors} />}
        />
        <Route
          path="all-products/desktops"
          element={<AllProducts products={desktops} />}
        />
        <Route
          path="all-products"
          element={<AllProducts products={allPrd} />}
        />
        <Route path="all-products/:itemId" element={<SingleProductPage />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}
export default App;
