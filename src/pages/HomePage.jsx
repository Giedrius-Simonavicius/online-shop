import React from 'react';
import '../styles/style.css';
import '../styles/App.css';
import Featuring from '../components/layout/Featuring';
import Products from '../components/homePageProducts/Products';

function HomePage() {
  return (
    <div className="">
      <Featuring />
      <Products />
    </div>
  );
}

export default HomePage;
