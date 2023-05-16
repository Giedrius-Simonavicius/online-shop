import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import inStockImg from '../../icons/instock.svg';
import star from '../../icons/Star.svg';
import starGray from '../../icons/StarGray.svg';

function Products({ products, title }) {
  const [inStock, setInStock] = useState([]);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setInStock(products.map((product) => product.inStock));
    setStars(products.map((product) => product.stars));
  }, [products]);

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
    <div className="flex container mx-auto mb-9">
      <div
        className="flex-col pr-3 mr-2 bg-cover bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${products[0].mainImg})` }}
      >
        <h3 className="text-white flex items-center justify-center text-center h-full w-40">
          {products[0].title}
        </h3>
        <p className="underline text-sm text-white flex items-end justify-center text-center -mt-12">
          See All Products
        </p>
      </div>

      {products.map((product, index) =>
        index !== 0 ? (
          <Card key={index}>
            {inStock[index] ? (
              <div className="flex gap-2">
                <img src={inStockImg} alt="instock" />
                <p className="text-color9 text-sm">In stock</p>
              </div>
            ) : (
              <p className="text-color5 text-sm">Out of stock</p>
            )}
            <img
              className="flex mx-auto mb-3 mt-3"
              key={index}
              src={product.thumbnail}
              alt={product.description}
            />
            <div className="flex mb-3">{renderStars(stars[index])}</div>
            <h3 className="text-sm max-w-prose font-normal mb-3 overflow-hidden">
              {product.description}
            </h3>
            <p className="font-normal line-through text-sm text-color10">
              $ {product.price}
            </p>
            <p className="font-medium text-sm ">$ {product.price}</p>
          </Card>
        ) : null,
      )}
    </div>
  );
}

export default Products;
