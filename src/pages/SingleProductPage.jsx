import React from 'react';
import { useParams } from 'react-router-dom';
import { allPrd } from '../data/data';
import SingleProduct from '../components/SingleProduct';

function SingleProductPage() {
  const { itemId } = useParams();

  const foundProductObj = allPrd.find((product) => product.id === itemId);

  return (
    <div>
      {foundProductObj ? (
        <SingleProduct product={foundProductObj} />
      ) : (
        <p>No information available for this product.</p>
      )}
    </div>
  );
}

export default SingleProductPage;
