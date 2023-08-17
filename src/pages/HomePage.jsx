import React from 'react';
import '../styles/style.css';
import '../styles/App.css';
import Featuring from '../components/layout/Featuring';
import Products from '../components/homePageProducts/Products';
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

  return loadingCustomPcs ||
    loadingDesktops ||
    loadingLaptops ||
    loadingMonitors ? (
    <img src="/public/images/loading .jpg" alt="loading screen" />
  ) : (
    <div>
      {!smScreen && <Featuring />}

      {!loadingCustomPcs ? (
        <Products title="Custom PCs" products={fetchedCustomPcs} />
      ) : (
        <div>Loading Custom pcs...</div>
      )}
      {!loadingLaptops ? (
        <Products title="Laptops" products={fetchedLaptops} />
      ) : (
        <div>Loading laptops...</div>
      )}
      {!loadingDesktops ? (
        <Products title="Desktops" products={fetchedDesktops} />
      ) : (
        <div>Loading desktops...</div>
      )}
      {!loadingMonitors ? (
        <Products title="Monitors" products={fetchedMonitors} />
      ) : (
        <div>Loading monitors...</div>
      )}

      <Brands container="container" />
      {!mdScreen && <Posts />}
      <Comments />
    </div>
  );
}

export default HomePage;
