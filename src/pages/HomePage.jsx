import React from 'react';
import '../styles/style.css';
import '../styles/App.css';
import Featuring from '../components/layout/Featuring';
import Products from '../components/homePageProducts/Products';
import { posts } from '../data/data';
import Brands from '../components/homePageProducts/Brands';
import Posts from '../components/homePageProducts/Posts';
import Comments from '../components/homePageProducts/Comments';
import { useGeneralCtx } from '../context/GeneralProvider';
import { useDataCtx } from '../context/DataProvider';

function HomePage() {
  const { mdScreen, smScreen } = useGeneralCtx();
  const {
    fetchedLaptops,
    loadingLaptops,
    fetchedDesktops,
    loadingDesktops,
    loadingMonitors,
    fetchedMonitors,
    fetchedCustomPcs,
    loadingCustomPcs,
  } = useDataCtx();

  return (
    <div>
      {!smScreen && <Featuring />}

      {!loadingCustomPcs ? (
        <Products products={fetchedCustomPcs} />
      ) : (
        <div>Loading...</div>
      )}
      {!loadingLaptops ? (
        <Products products={fetchedLaptops} />
      ) : (
        <div>Loading...</div>
      )}
      {!loadingDesktops ? (
        <Products products={fetchedDesktops} />
      ) : (
        <div>Loading...</div>
      )}
      {!loadingMonitors ? (
        <Products products={fetchedMonitors} />
      ) : (
        <div>Loading...</div>
      )}

      <Brands container="container" />
      {!mdScreen && <Posts />}
      <Comments />
    </div>
  );
}

export default HomePage;
