import React from 'react';
import '../styles/style.css';
import '../styles/App.css';
import Featuring from '../components/layout/Featuring';
import Products from '../components/homePageProducts/Products';
import { customPcs, desktops, laptops, monitors, posts } from '../data/data';
import Brands from '../components/homePageProducts/Brands';
import Posts from '../components/homePageProducts/Posts';
import Comments from '../components/homePageProducts/Comments';
import { useGeneralCtx } from '../context/GeneralProvider';

function HomePage() {
  const { mdScreen } = useGeneralCtx();
  return (
    <div className="">
      <Featuring />
      <Products products={customPcs} />
      <Products products={laptops} />
      <Products products={desktops} />
      <Products products={monitors} />
      <Brands container="container" />
      {!mdScreen && <Posts posts={posts} />}
      <Comments />
    </div>
  );
}

export default HomePage;
