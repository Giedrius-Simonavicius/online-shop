import React from 'react';

function SingleProduct({ product }) {
  return (
    <div>
      single item
      <p>{product.id}</p>
      <p>{product.singleInfo}</p>
    </div>
  );
}

export default SingleProduct;
