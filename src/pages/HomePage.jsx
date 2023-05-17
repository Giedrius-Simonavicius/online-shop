import React, { useEffect, useState } from 'react';
import '../styles/style.css';
import '../styles/App.css';
import Featuring from '../components/layout/Featuring';
import Products from '../components/homePageProducts/Products';
import { customPcs, desktops, laptops, monitors, posts } from '../data/data';
import Brands from '../components/homePageProducts/Brands';
import Posts from '../components/homePageProducts/Posts';

function HomePage() {
  const [pcsArr, setPcsArr] = useState([]);

  return (
    <div className="">
      <Featuring />
      <Products products={customPcs} />
      <Products products={laptops} />
      <Products products={desktops} />
      <Products products={monitors} />
      <Brands />
      <Posts posts={posts} />
    </div>
  );
}

export default HomePage;
