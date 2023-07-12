import React, { useEffect, useState } from 'react';
import '../styles/style.css';
import '../styles/App.css';
import Featuring from '../components/layout/Featuring';
import Products from '../components/homePageProducts/Products';
import { customPcs, desktops, laptops, monitors, posts } from '../data/data';
import Brands from '../components/homePageProducts/Brands';
import Posts from '../components/homePageProducts/Posts';
import Comments from '../components/homePageProducts/Comments';
import { useGeneralCtx } from '../context/GeneralProvider';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';

function HomePage() {
  const [firebaseTest, setFirebaseTest] = useState([]);

  // useEffect(() => {
  //   async function getItems() {
  //     try {
  //       const querySnapshot = await getDocs(collection(db, 'customPcs'));
  //       const tempItems = [];
  //       querySnapshot.forEach((doc) => {
  //         tempItems.push({
  //           uid: doc.id,
  //           ...doc.data(),
  //         });
  //       });
  //       setFirebaseTest(tempItems);
  //       console.log('firebaseTest ===', firebaseTest);
  //     } catch (error) {
  //       console.warn('Something went wrong');
  //       console.error('Error fetching Firestore data:', error);
  //     }
  //   }
  //   getItems();
  // }, []);

  const { mdScreen, smScreen } = useGeneralCtx();
  return (
    <div className="">
      {!smScreen && <Featuring />}
      {/* {firebaseTest.map((item) => {
        console.log(item.uid);
        return (
          <div key={item.uid}>
            <h3>{item.inStock}</h3>
            <div>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          </div>
        );
      })} */}

      <Products products={customPcs} />
      <Products products={laptops} />
      <Products products={desktops} />
      <Products products={monitors} />
      <Brands container="container" />
      {!mdScreen && <Posts posts={posts} />}
      {/* <Comments /> pasileidau infinate loopa ir sudroziau firebase reads */}
    </div>
  );
}

export default HomePage;
