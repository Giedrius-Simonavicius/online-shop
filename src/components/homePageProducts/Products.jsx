import React from 'react';

function Products({ customPcs }) {
  return (
    <div>
      {customPcs.map((pc, index) => (
        <img key={index} src={pc.thumbnail} alt={pc.description} />
      ))}
    </div>
  );
}

export default Products;
