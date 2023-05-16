import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import inStockImg from '../../icons/instock.svg';
import { customPcs } from '../../data/data';
import star from '../../icons/Star.svg';
import starGray from '../../icons/StarGray.svg';
import customBuilds from '../../img/pcs/customBuildsimg.png';

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
    <div className="flex container mx-auto mb-4">
      <div
        className="flex-col bg-cover bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${customBuilds})` }}
      >
        <h3 className="text-white flex items-center justify-center text-center h-full w-40">
          Custom Builds
        </h3>
        <p className="underline text-sm text-white flex items-end justify-center text-center -mt-12">
          See All Products
        </p>
      </div>

      {customPcs.map((pc, index) => (
        <Card key={index}>
          {(inStock[index] && (
            <div className="flex gap-2">
              <img src={inStockImg} alt="instock" />
              <p className="text-color9 text-sm">In stock</p>
            </div>
          )) || <p className="text-color5 text-sm">Out of stock</p>}
          <img
            className="flex mx-auto mb-3 mt-3"
            key={index}
            src={pc.thumbnail}
            alt={pc.description}
          />
          <div className="flex mb-3">{renderStars(stars[index])}</div>
          <h3 className="text-sm max-w-prose font-normal mb-3 overflow-hidden">
            {pc.description}
          </h3>
          <p className="font-normal line-through text-sm text-color10">
            $ {pc.price}
          </p>
          <p className="font-medium text-sm ">$ {pc.price}</p>
        </Card>
      ))}
    </div>
  );
}

export default Products;
