import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import { NavLink } from 'react-router-dom';

function Products({ products }) {
  const [inStock, setInStock] = useState([]);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setInStock(products.map((product) => product.inStock));
    setStars(products.map((product) => product.stars));
  }, [products]);

  const renderStars = (starCount) => {
    const starsArray = Array(5).fill('../../../public/icons/StarGray.svg');
    const renderedStars = starsArray.map((starSrc, index) =>
      index < starCount ? (
        <img
          key={index}
          src="../../../public/icons/Star.svg"
          alt={`star-${index}`}
        />
      ) : (
        <img key={index} src={starSrc} alt={`star-${index}`} />
      ),
    );
    return renderedStars;
  };
  const slicedProducts = products.slice(1, 7);

  return (
    <div className="container  mx-auto mb-12 mt-12 flex">
      <div
        className="mr-2 flex-col bg-cover bg-center bg-no-repeat pl-3 pr-3 "
        style={{ backgroundImage: `url(${products[0].mainImg})` }}
      >
        <h3 className="flex h-full w-40 items-center justify-center text-center text-white">
          {products[0].title}
        </h3>
        <NavLink
          to={products[0].link}
          className="-mt-12 flex items-end justify-center text-center text-sm text-white underline"
        >
          See All Products
        </NavLink>
      </div>

      <div className="mx-auto flex flex-wrap">
        {slicedProducts.map((product, index) =>
          index !== 0 ? (
            <Card key={index} width="max-w-48">
              {inStock[index] ? (
                <div className="flex gap-2">
                  <img src="../../../public/icons/instock.svg" alt="instock" />
                  <p className="text-sm text-color9">In stock</p>
                </div>
              ) : (
                <p className="text-sm text-color5">Out of stock</p>
              )}
              <img
                className="mx-auto mb-3 mt-3 flex"
                key={index}
                src={product.thumbnail}
                alt={product.description}
              />
              <div className="mb-3 flex">{renderStars(stars[index])}</div>
              <h3 className="mb-3 w-36 max-w-prose overflow-hidden text-sm font-normal">
                {product.description}
              </h3>
              <p className="text-sm font-normal text-color10 line-through">
                {product.price}
              </p>
              <p className="text-sm font-medium">{product.price}</p>
            </Card>
          ) : null,
        )}
      </div>
    </div>
  );
}

export default Products;
