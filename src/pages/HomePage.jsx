import React from 'react';
import '../styles/style.css';
import '../styles/App.css';
import Featuring from '../components/layout/Featuring';
import Products from '../components/homePageProducts/Products';
import {
  customPcs,
  desktops,
  laptops,
  monitors,
  posts,
  comments,
} from '../data/data';
import Brands from '../components/homePageProducts/Brands';
import Posts from '../components/homePageProducts/Posts';
import Comments from '../components/homePageProducts/Comments';
import Services from '../components/homePageProducts/Services';

function HomePage() {
  return (
    <div className="">
      <Featuring />
      <Products products={customPcs} />
      <Products products={laptops} />
      <Products products={desktops} />
      <Products products={monitors} />
      <Brands />
      <Posts posts={posts} />
      <Comments />
      <Services />
    </div>
  );
}

export default HomePage;
