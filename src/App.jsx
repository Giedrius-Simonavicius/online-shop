import './styles/App.css';
import './styles/style.css';

import { Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/layout/HeaderComponent';
import HomePage from './pages/HomePage';
import FooterComponent from './components/layout/FooterComponent';
import AllProducts from './pages/AllProducts';
import { laptops, customPcs, monitors, desktops } from './data/data';

function App() {
  return (
    <div>
      <HeaderComponent />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
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
      </Routes>
      <FooterComponent />
    </div>
  );
}
export default App;
