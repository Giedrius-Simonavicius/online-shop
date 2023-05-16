import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import inStockImg from '../../icons/instock.svg';
import { customPcs } from '../../data/data';
import star from '../../icons/Star.svg';
import starGray from '../../icons/StarGray.svg';

function Products() {
  const [inStock, setInStock] = useState([]);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setInStock(customPcs.map((pc) => pc.inStock));
    setStars(customPcs.map((pc) => pc.stars));
  }, []);

  const renderStars = (starCount) => {
    const starsArray = Array(5).fill(starGray);
    const renderedStars = starsArray.map((starSrc, index) =>
      index < starCount ? (
        <img key={index} src={star} alt={`star-${index}`} />
      ) : (
        <img key={index} src={starSrc} alt={`star-${index}`} />
      ),
    );
    return renderedStars;
  };

  return (
    <div className="flex">
      {customPcs.map((pc, index) => (
        <Card key={index}>
          {(inStock[index] && (
            <div className="flex gap-2">
              <img src={inStockImg} alt="instock" />
              <p className="text-color9">In stock</p>
            </div>
          )) || <p className="text-color5">Out of stock</p>}
          <img key={index} src={pc.thumbnail} alt={pc.description} />
          <div className="flex">{renderStars(stars[index])}</div>
          <h3>{pc.description}</h3>
          <p className="line-through">$ {pc.price}</p>
          <p>$ {pc.price}</p>
        </Card>
      ))}
    </div>
  );
}

export default Products;
