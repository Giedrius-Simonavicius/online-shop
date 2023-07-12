import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase/firebase';


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