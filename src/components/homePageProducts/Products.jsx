import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import inStockImg from '../../icons/instock.svg';
import { customPcs } from '../../data/data';
import star from '../../icons/Star.svg';
function Products() {
  const [inStock, setInStock] = useState([]);
  const [stars, setStars] = useState([]);
  const oneStars = [star, star, star, star, star];
  const twoStars = [star, star, star, star, star];
  const threeStars = [star, star, star, star, star];
  const fourStars = [star, star, star, star, star];
  const fiveStars = [star, star, star, star, star];
  console.log('fiveStars ===', fiveStars);

  useEffect(() => {
    setInStock(customPcs.map((pc) => pc.inStock));
    setStars(customPcs.map((pc) => pc.stars));
  }, []);

  return (
    <div className="flex">
      {fiveStars.map((oneStar) => (
        <img src={oneStar} alt="oneStar" />
      ))}
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
