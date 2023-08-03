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
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db, storage } from './firebase/firebase';
import { useDataCtx } from './context/DataProvider';
import ConfirmedPurchase from './pages/ConfirmedPurchase';

function App() {
  const {
    fetchedLaptops,
    fetchedDesktops,
    fetchedMonitors,
    fetchedCustomPcs,
    allPrd,
  } = useDataCtx();

  // const imageRef = storage.ref().child('postsImages/post1.jpg');
  // console.log('imageRef ===', imageRef);

  // async function checkCollectionExists(collectionName) {
  //   const querySnapshot = await getDocs(collection(db, collectionName));
  //   return !querySnapshot.empty;
  // }

  // async function uploadpostsFirestore() {
  //   console.log('Function uploadpostsFirestore() is called');

  //   try {
  //     const collectionName = 'posts';
  //     const postsCollection = collection(db, collectionName);

  //     console.log('Checking if the "posts" collection exists...');
  //     const collectionExists = await checkCollectionExists(collectionName);

  //     if (!collectionExists) {
  //       console.log('The "posts" collection does not exist. Creating it...');
  //       await addDoc(collection(db, 'posts'), {
  //         name: 'posts',
  //       });
  //     }

  //     for (const post of posts) {
  //       console.log('Uploading post to Firestore:', post);
  //       await addDoc(postsCollection, post);
  //     }

  //     console.log('All posts uploaded to Firestore successfully!');
  //   } catch (error) {
  //     console.error('Error uploading posts:', error);
  //   }
  // }

  // uploadpostsFirestore();
  return (
    <div>
      <ScrollToTop />

      <Toaster />
      <HeaderComponent products={allPrd} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="cart/delivery" element={<CartDelivery />} />
        <Route path="cart/review" element={<CartReview />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="terms-conditions" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/confirmed" element={<ConfirmedPurchase />} />
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
