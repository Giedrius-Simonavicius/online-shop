import React from 'react';
import Card from '../card/Card';
import { Link, NavLink } from 'react-router-dom';
import { useGeneralCtx } from '../../context/GeneralProvider';
import { formatCurrency } from '../../helperFns';

function Products({ products }) {
  const { renderStars } = useGeneralCtx();

  const slicedProducts = products.slice(0, 7);

  return (
    <div className="container  mx-auto mb-12 mt-12 flex">
      <div className="flex flex-wrap">
        <div
          className="mr-10 flex-col rounded bg-cover bg-center bg-no-repeat pl-2  "
          style={{ backgroundImage: `url(${products[0].mainImg})` }}
        >
          <h3 className="flex h-full w-40 items-center justify-center text-center text-white">
            {products[0].title}
          </h3>
          <NavLink
            to={products[0].link}
            className="-mt-12 flex items-end justify-center text-center text-sm text-white underline duration-200 hover:scale-110 hover:text-color8"
          >
            See All Products
          </NavLink>
        </div>
        {slicedProducts.map((product, index) =>
          index !== 0 ? (
            <Link to={`/all-products/${product.id}`} key={index}>
              <Card
                key={index}
                hover={'hover:scale-110  duration-200 hover:px-3'}
                width="max-w-48"
              >
                {product.inStock ? (
                  <div className=" mt-4 flex gap-2 ">
                    <img
                      loading="lazy"
                      src="/icons/instock.svg"
                      alt="instock"
                    />
                    <p className="text-sm text-color9">In stock</p>
                  </div>
                ) : (
                  <p className="mt-4 text-sm text-color5">Out of stock</p>
                )}
                <img
                  loading="lazy"
                  className="mx-auto mb-3 mt-3 flex"
                  key={index}
                  src={product.thumbnail}
                  alt={product.name}
                />
                <div className="mb-3 flex">{renderStars(product.stars)}</div>
                <h3 className="mb-3 w-36 max-w-prose overflow-hidden text-sm font-normal">
                  {`${product.aboutProduct.slice(0, 44)}...`}
                </h3>
                {product.discount !== 0 && (
                  <div className="flex gap-3">
                    <p className="text-sm font-normal text-color10 line-through">
                      {formatCurrency(product.price.toFixed(2))}
                    </p>
                    <span className="text-color8">{`-${product.discount}%`}</span>
                  </div>
                )}
                <p className="text-sm font-medium">
                  {formatCurrency(product.discountedPrice)}
                </p>
              </Card>
            </Link>
          ) : null,
        )}
      </div>
    </div>
  );
}

export default Products;
