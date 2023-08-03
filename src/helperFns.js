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

// export async function fetchItemsAndImages(collectionName) { ... }: This line defines a function named fetchItemsAndImages and exports it so that it can be used in other parts of the code. The function takes a single parameter called collectionName, which is the name of the Firestore collection from which to fetch the data.

// try { ... } catch (error) { ... }: This structure is used for error handling. The code inside the try block is the main logic of the function, where we attempt to fetch the data and images from Firestore. If any error occurs during this process, it will be caught in the catch block, and the error message will be printed to the console.

// const querySnapshot = await getDocs(collection(db, collectionName));: This line fetches the documents (items) from the specified Firestore collection (collectionName). The getDocs function returns a querySnapshot, which is a snapshot of the documents in the collection.

// const tempItems = [];: This creates an empty array called tempItems to store the fetched items temporarily.

// const storage = getStorage();: This line creates a storage object using the getStorage() function from Firebase SDK. The storage object provides access to the Firebase Storage service, where we store images.

// const imageURLsPromises = [];: This line creates an empty array called imageURLsPromises to store the promises that will fetch the download URLs of the thumbnail images.

// querySnapshot.forEach((doc) => { ... });: This loop iterates over each document (item) in the querySnapshot.

// const itemData = doc.data();: This line extracts the data of the current document and stores it in the itemData variable. The doc.data() method returns an object containing the data stored in the document.

// tempItems.push({ uid: doc.id, ...itemData, });: This line creates a new object with the uid property (document ID) and all the properties from the itemData object. It pushes this new object into the tempItems array, effectively creating an array of item objects.

// if (itemData.thumbnail) { ... }: This condition checks if the current item has a thumbnail property. If it does, it means the item has an associated thumbnail image that needs to be fetched.

// const imageRef = ref(storage, itemData.thumbnail);: This line creates a reference to the image file in Firebase Storage. It uses the ref function from Firebase SDK and passes the storage object and the path to the thumbnail image.

// const downloadURLPromise = getDownloadURL(imageRef);: This line fetches the download URL of the image from Firebase Storage. It uses the getDownloadURL function from Firebase SDK and returns a promise that resolves to the download URL.

// imageURLsPromises.push(downloadURLPromise);: This line adds the promise returned by getDownloadURL to the imageURLsPromises array. The promises in this array will be used to fetch all the thumbnail URLs concurrently.

// const downloadURLs = await Promise.all(imageURLsPromises);: This line waits for all the promises in the imageURLsPromises array to resolve. The Promise.all function returns an array of download URLs of the thumbnail images.

// tempItems.forEach((item, index) => { ... });: This loop iterates over each item in the tempItems array and modifies it to include the thumbnailURL property.

// item.thumbnailURL = downloadURLs[index];: This line adds the thumbnailURL property to the item object and assigns it the corresponding download URL from the downloadURLs array.

// return tempItems;: This line returns the tempItems array, which now contains all the fetched items with their respective thumbnail URLs.

// In summary, the fetchItemsAndImages function fetches the data from the specified Firestore collection and, for each item that has a thumbnail property, it fetches the download URL of the thumbnail image from Firebase Storage. The function then returns an array of item objects, each including its respective thumbnailURL property with the download URL.
