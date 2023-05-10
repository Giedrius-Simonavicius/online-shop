import React from 'react';
import { customPcs } from '../../data/data';

function Products() {
  console.log('customPcs ===', customPcs);
  return (
    <div>
      {customPcs.map((pc, index) => (
        <img key={index} src={pc.thumbnail} alt={pc.description} />
      ))}
    </div>
  );
}

export default Products;
