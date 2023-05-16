import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import inStockImg from '../../icons/instock.svg';
import { customPcs } from '../../data/data';
function Products() {
  const [inStock, setInStock] = useState([]);
  useEffect(() => {
    setInStock(customPcs.map((pc) => pc.inStock));
  }, []);

  return (
    <div className="flex">
      {customPcs.map((pc, index) => (
        <Card key={index}>
          {inStock[index] && (
            <div>
              <img src={inStockImg} alt="instock" />
              <p className="text-color9">in stock</p>
            </div>
          )}
          <img key={index} src={pc.thumbnail} alt={pc.description} />
          <p>{pc.stars}</p>
          <h3>{pc.description}</h3>
          <p className="line-through">$ {pc.price}</p>
          <p>$ {pc.price}</p>
        </Card>
      ))}
    </div>
  );
}

export default Products;
