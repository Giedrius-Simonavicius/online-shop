import React, { useEffect, useState } from 'react';
import '../styles/style.css';
import '../styles/App.css';
import Featuring from '../components/layout/Featuring';
import Products from '../components/homePageProducts/Products';
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import ToStorageA from '../components/ToStorageA';
import { customPcs, desktops, laptops, monitors, posts } from '../data/data';
import Brands from '../components/homePageProducts/Brands';
import Posts from '../components/homePageProducts/Posts';

function HomePage() {
  const [pcsArr, setPcsArr] = useState([]);

  useEffect(() => {
    async function getPcs() {
      try {
        const querySnapshot = await getDocs(collection(db, 'customPcs'));
        const tempPcs = [];
        querySnapshot.forEach((doc) => {
          tempPcs.push({
            uid: doc.id,
            ...doc.data(),
          });
        });
        setPcsArr(tempPcs);
      } catch (error) {
        console.log('error');
      }
    }

    getPcs();
  }, []);

  return (
    <div className="">
      <Featuring />
      <Products products={customPcs} />
      <Products products={laptops} />
      <Products products={desktops} />
      <Products products={monitors} />
      <Brands />
      <Posts posts={posts} />
      {/* <ToStorageA /> */}
    </div>
  );
}

export default HomePage;
