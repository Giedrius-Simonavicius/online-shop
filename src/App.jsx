import './styles/App.css';
import './styles/style.css';
import { Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/layout/HeaderComponent';
import HomePage from './pages/HomePage';
import FooterComponent from './components/layout/FooterComponent';
import AllProducts from './pages/AllProducts';
import SingleProductPage from './pages/SingleProductPage';
import ContactUs from './pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import AboutUs from './pages/AboutUs';
import Terms from './pages/Terms';
import Services from './components/homePageProducts/Services';
import NotFound from './pages/NotFound';
import { Toaster } from 'react-hot-toast';
import Cart from './pages/Cart';
import CartDelivery from './pages/CartDelivery';
import CartReview from './pages/CartReview';
import { useDataCtx } from './context/DataProvider';
import ConfirmedPurchase from './pages/ConfirmedPurchase';
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import { useShoppingCartCtx } from './context/ShoppingCartContext';
import AccessDenied from './pages/AccessDenied';
import { useGeneralCtx } from './context/GeneralProvider';

function App() {
  const {
    fetchedLaptops,
    fetchedDesktops,
    fetchedMonitors,
    fetchedCustomPcs,
    allPrd,
  } = useDataCtx();

  const { cartArr } = useShoppingCartCtx();
  const { isLoggedIn } = useGeneralCtx();

  return (
    <div>
      <ScrollToTop />

      <Toaster />
      <HeaderComponent products={allPrd} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route
          path="cart"
          element={cartArr.length > 0 ? <Cart /> : <AccessDenied cart />}
        />
        <Route path="user" element={<UserLogin />} />
        <Route
          path="user/register"
          element={isLoggedIn ? <HomePage /> : <UserRegister />}
        />
        <Route
          path="cart/delivery"
          element={cartArr.length > 0 ? <CartDelivery /> : <AccessDenied />}
        />
        <Route
          path="cart/review"
          element={cartArr.length > 0 ? <CartReview /> : <AccessDenied />}
        />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="terms-conditions" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/confirmed"
          element={
            cartArr.length > 0 ? <ConfirmedPurchase /> : <AccessDenied />
          }
        />
        <Route
          path="all-products/laptops"
          element={<AllProducts products={fetchedLaptops} />}
        />
        <Route
          path="all-products/custom-pcs"
          element={<AllProducts products={fetchedCustomPcs} />}
        />
        <Route
          path="all-products/monitors"
          element={<AllProducts products={fetchedMonitors} />}
        />
        <Route
          path="all-products/desktops"
          element={<AllProducts products={fetchedDesktops} />}
        />
        <Route
          path="all-products"
          element={<AllProducts products={allPrd} />}
        />
        <Route path="all-products/:itemId" element={<SingleProductPage />} />
      </Routes>
      <Services />
      <FooterComponent />
    </div>
  );
}
export default App;
