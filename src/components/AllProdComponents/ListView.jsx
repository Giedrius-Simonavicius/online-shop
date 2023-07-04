import React from 'react';
import { useGeneralCtx } from '../../context/GeneralProvider';
import AddToCart from '../singleProductComponents/AddToCart';
import { formatCurrency } from '../../helperFns';
import { Link } from 'react-router-dom';

function ListView({ product, key }) {
  const { mdScreen, smScreen, renderStars } = useGeneralCtx();

  return smScreen ? (
    <div>
      <div className="mb-5  px-1">
        <div className="mt-2  flex w-full gap-3 overflow-x-auto">
          <img
            loading="lazy"
            className="h-36 w-36 hover:cursor-pointer"
            src={product.thumbnail}
            alt="thumbnail"
          />
          <div className="mb-3 flex">{renderStars(product.stars)}</div>
        </div>
        <div className="mt-4 flex justify-between gap-2 text-xs">
          <p className="lg:text-xxs">{product.productId}</p>
        </div>
      </div>
      <div className="my-6">
        <div className="flex">
          <div className="pb-10 pt-4 sm:px-6 ">
            <h3 className="my-5 text-2xl lg:text-xl">{product.name}</h3>
            <div className="flex w-fit">
              <p className=" text-sm lg:text-xs">{product.aboutProduct}</p>
            </div>
          </div>
        </div>
        <AddToCart product={product} />
      </div>
    </div>
  ) : (
    <div className="mb-8  p-2 duration-100 hover:shadow-top-bottom">
      <div className="flex  justify-end">
        {product.inStock ? (
          <div className="flex gap-2">
            <img loading="lazy" src="../icons/instock.svg" alt="instock" />
            <p className="text-xs text-color9">In stock</p>
          </div>
        ) : (
          <p className="text-xs text-color5">Out of stock</p>
        )}
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-6">
          <div className="lg:col-span-2">
            <img
              loading="lazy"
              className="h-36 w-36 hover:cursor-pointer"
              src={product.thumbnail}
              alt="thumbnail"
            />
          </div>

          <div className="col-span-3 lg:col-span-2">
            <p className="my-4 text-sm font-normal lg:text-xs">
              {product.productId}
            </p>
            <p className="text-sm font-normal lg:text-xs">
              {product.aboutProduct}
            </p>
            {product.discount !== 0 ? (
              <div className="mt-3 flex gap-3">
                <p className="text-sm font-normal text-color10 line-through">
                  {formatCurrency(product.price.toFixed(2))}
                </p>
                <p className="text-sm font-medium">
                  {formatCurrency(product.discountedPrice)}
                </p>
              </div>
            ) : (
              <p className="mt-3 text-sm font-medium">
                {formatCurrency(product.discountedPrice)}
              </p>
            )}
          </div>
          <ul className="my-auto text-sm capitalize lg:text-xs">
            {Object.entries(product.specs).map(([key, value]) => (
              <li key={key}>{`${key}: ${value}`}</li>
            ))}
          </ul>
        </div>
        <div className="mb-3 flex justify-between">
          <div className="flex">{renderStars(product.stars)}</div>
          <div
            className="text-xs sm:text-xxs"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <AddToCart list product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListView;
