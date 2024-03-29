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

  return (
    <div>
      {!smScreen && <Featuring />}

      {!loadingCustomPcs ? (
        <Products title="Custom PCs" products={fetchedCustomPcs} />
      ) : (
        <div className="ml-10 mt-6">Loading Custom pcs...</div>
      )}
      {!loadingLaptops ? (
        <Products title="Laptops" products={fetchedLaptops} />
      ) : (
        <div className="ml-10 mt-6">Loading laptops...</div>
      )}
      {!loadingDesktops ? (
        <Products title="Desktops" products={fetchedDesktops} />
      ) : (
        <div className="ml-10 mt-6">Loading desktops...</div>
      )}
      {!loadingMonitors ? (
        <Products title="Monitors" products={fetchedMonitors} />
      ) : (
        <div className="ml-10 mt-6">Loading monitors...</div>
      )}

      <Brands container="container" />
      {!mdScreen && <Posts />}
      <Comments />
    </div>
  );
}

export default HomePage;
