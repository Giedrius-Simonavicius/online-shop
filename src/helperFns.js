import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase/firebase';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
});
export function formatCurrency(number) {
  return CURRENCY_FORMATTER.format(number);
}

export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatTimestamp(timestamp) {
  const dateObj = new Date(timestamp);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  const hours = String(dateObj.getHours()).padStart(2, '0');
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');
  const seconds = String(dateObj.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export function calculateDiscountedPrice(price, discount) {
  return (price - (price * discount) / 100).toFixed(2);
}

export async function fetchItems(collectionName) {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const tempItems = [];
    querySnapshot.forEach((doc) => {
      tempItems.push({
        uid: doc.id,
        ...doc.data(),
      });
    });
    return tempItems;
  } catch (error) {
    console.error('Error fetching Firestore data:', error);
    throw new Error('Something went wrong');
  }
}
export async function fetchItemsAndImages(collectionName) {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const tempItems = [];
    const storage = getStorage();
    const imageURLsPromises = [];

    querySnapshot.forEach((doc) => {
      const itemData = doc.data();
      tempItems.push({
        uid: doc.id,
        ...itemData,
      });

      if (itemData.thumbnail) {
        const imageRef = ref(storage, itemData.thumbnail);
        const downloadURLPromise = getDownloadURL(imageRef);
        imageURLsPromises.push(downloadURLPromise);
      }
    });

    const downloadURLs = await Promise.all(imageURLsPromises);
    tempItems.forEach((item, index) => {
      if (item.thumbnail) {
        item.thumbnailURL = downloadURLs[index];
      }
    });

    return tempItems;
  } catch (error) {
    console.error('Error fetching Firestore data:', error);
    throw new Error('Something went wrong');
  }
}
