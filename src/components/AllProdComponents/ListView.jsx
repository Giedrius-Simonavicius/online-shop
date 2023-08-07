import React from 'react';
import { useGeneralCtx } from '../../context/GeneralProvider';
import AddToCart from '../singleProductComponents/AddToCart';
import { calculateDiscountedPrice, formatCurrency } from '../../helperFns';
import PropTypes from 'prop-types';

function ListView({ product }) {
  const { renderStars } = useGeneralCtx();

  return (
    <div className="mb-8 px-10 py-2 duration-100 hover:shadow-top-bottom">
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
              src={product.thumbnailURL}
              alt="thumbnailURL"
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
                <span className="text-sm text-color8">{`-${product.discount}%`}</span>
                <p className="text-sm font-medium">
                  {formatCurrency(
                    calculateDiscountedPrice(product.price, product.discount),
                  )}
                </p>
              </div>
            ) : (
              <p className="mt-3 text-sm font-medium">
                {formatCurrency(
                  calculateDiscountedPrice(product.price, product.discount),
                )}
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

ListView.propTypes = {
  product: PropTypes.shape({
    productId: PropTypes.string.isRequired,
    aboutProduct: PropTypes.string.isRequired,
    thumbnailURL: PropTypes.string.isRequired,
    inStock: PropTypes.bool.isRequired,
    discount: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    stars: PropTypes.number.isRequired,
    specs: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired,
};
export default ListView;
