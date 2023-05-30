import React from 'react';
import { useParams } from 'react-router-dom';
import { allPrd } from '../data/data';
import SingleProduct from '../components/SingleProduct';

function SingleProductPage() {
  const { itemId } = useParams();
  console.log('allPrd ===', allPrd);

  const foundItemObj = allPrd.find((pObj) => pObj.id === +itemId);
  if (foundItemObj) {
    console.log('radom foundItemObj ===', foundItemObj);
  } else {
    console.log('neradom');
  }
  return (
    <div>
      SingleProductPage
      <SingleProduct product={foundItemObj} />
    </div>
  );
}

export default SingleProductPage;
