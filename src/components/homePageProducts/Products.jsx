import React from 'react';
import Card from '../card/Card';
import { Link } from 'react-router-dom';
import { useGeneralCtx } from '../../context/GeneralProvider';
import { calculateDiscountedPrice, formatCurrency } from '../../helperFns';
import PropTypes from 'prop-types';
import ImageRenderer from '../AllProdComponents/ImageRenderer';

function Products({ products, title }) {
  const { renderStars, mdScreen, smScreen, xlScreen } = useGeneralCtx();
  const sliceOne = products.slice(0, products.length - 1);
  const sliceOneXl = products.slice(0, products.length - 1);

  const slicedProducts = [...sliceOne.slice(0, 6)];
  const slicedProductsForXl = [...sliceOneXl.slice(0, 7)];

  return smScreen ? (
    <div className="container mx-auto mb-4">
      <div>
        <ImageRenderer
          mainImg={products[products.length - 1]?.mainImg}
          link={products[products.length - 1]?.link}
          title={title}
          smScreen={smScreen}
        />
        <ul className="flex overflow-x-auto">
          {slicedProducts.map((product, index) => (
            <li key={index} className="mx-4">
              <Link
                to={`/all-products/${product.uid}`}
                key={index}
                width="w-64"
              >
                {product.inStock ? (
                  <div className="mt-4 flex gap-2">
                    <img
                      loading="lazy"
                      src="/icons/instock.svg"
                      alt="instock"
                    />
                    <p className="text-xxs text-color9">In stock</p>
                  </div>
                ) : (
                  <p className="mt-4 text-xxs text-color5">Out of stock</p>
                )}

                <img
                  loading="lazy"
                  src={product.thumbnailURL}
                  alt={product.name}
                />

                <div className="mb-3 mt-1 flex">
                  {renderStars(product.stars)}
                </div>
                <h3 className="mb-3 w-36 max-w-prose overflow-hidden text-sm font-normal">
                  {product.aboutProduct &&
                    `${product.aboutProduct.slice(0, 44)}...`}
                </h3>
                {product.discount !== 0 && typeof product.price === 'number' ? (
                  <div className="flex gap-3">
                    <p className="text-sm font-normal text-color10 line-through">
                      {product.price !== undefined
                        ? formatCurrency(product.price.toFixed(2))
                        : ''}
                    </p>
                    <span className="text-color8">{`-${product.discount}%`}</span>
                  </div>
                ) : null}
                <p className="text-sm font-medium">
                  {product.price !== undefined &&
                  typeof product.price === 'number' &&
                  product.discount !== undefined &&
                  typeof product.discount === 'number'
                    ? formatCurrency(
                        calculateDiscountedPrice(
                          product.price,
                          product.discount,
                        ),
                      )
                    : ''}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <div
      className={`container mx-auto mb-12 mt-12 ${
        mdScreen ? 'overflow-x-auto' : 'px-3'
      }`}
    >
      <ul className={`${mdScreen ? '' : 'flex-wrap'} flex`}>
        <ImageRenderer
          mainImg={products[products.length - 1]?.mainImg}
          link={products[products.length - 1]?.link}
          title={title}
          smScreen={smScreen}
        />
        {xlScreen
          ? slicedProductsForXl.map((product, index) => (
              <li className="mx-4" key={index}>
                <Link
                  to={`/all-products/${product.uid}`}
                  key={index}
                  hover={'hover:scale-110 duration-200'}
                  width="max-w-48"
                >
                  {product.inStock ? (
                    <div className="mt-4 flex gap-2">
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
                    src={product.thumbnailURL}
                    alt={product.name}
                  />

                  <div className="mb-3 mt-1 flex">
                    {renderStars(product.stars)}
                  </div>
                  <h3 className="mb-3 w-36 max-w-prose overflow-hidden text-sm font-normal">
                    {product.aboutProduct &&
                      `${product.aboutProduct.slice(0, 44)}...`}
                  </h3>
                  {product.discount !== 0 && product.price !== undefined && (
                    <div className="flex gap-3">
                      <p className="text-sm font-normal text-color10 line-through">
                        {formatCurrency(product.price.toFixed(2))}
                      </p>
                      <span className="text-color8">{`-${product.discount}%`}</span>
                    </div>
                  )}
                  <p className="text-sm font-medium">
                    {product.price !== undefined &&
                    typeof product.price === 'number' &&
                    product.discount !== undefined &&
                    typeof product.discount === 'number'
                      ? formatCurrency(
                          calculateDiscountedPrice(
                            product.price,
                            product.discount,
                          ),
                        )
                      : ''}
                  </p>
                </Link>
              </li>
            ))
          : slicedProducts.map((product, index) => (
              <li className="mx-4" key={index}>
                <Link
                  to={`/all-products/${product.uid}`}
                  key={index}
                  hover={'hover:scale-110 duration-200 '}
                  width="max-w-48"
                >
                  {product.inStock ? (
                    <div className="mt-4 flex gap-2">
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
                    src={product.thumbnailURL}
                    alt={product.name}
                  />

                  <div className="mb-3 mt-1 flex">
                    {renderStars(product.stars)}
                  </div>
                  <h3 className="mb-3 w-36 max-w-prose overflow-hidden text-sm font-normal">
                    {product.aboutProduct &&
                      `${product.aboutProduct.slice(0, 44)}...`}
                  </h3>
                  {product.discount !== 0 &&
                  typeof product.price === 'number' ? (
                    <div className="flex gap-3">
                      <p className="text-sm font-normal text-color10 line-through">
                        {formatCurrency(product.price.toFixed(2))}
                      </p>
                      <span className="text-color8">{`-${product.discount}%`}</span>
                    </div>
                  ) : null}
                  <p className="text-sm font-medium">
                    {product.price !== undefined &&
                    typeof product.price === 'number' &&
                    product.discount !== undefined &&
                    typeof product.discount === 'number'
                      ? formatCurrency(
                          calculateDiscountedPrice(
                            product.price,
                            product.discount,
                          ),
                        )
                      : ''}
                  </p>
                </Link>
              </li>
            ))}
      </ul>
    </div>
  );
}
Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      mainImg: PropTypes.string,
      title: PropTypes.string,
      link: PropTypes.string,
      inStock: PropTypes.bool,
      discount: PropTypes.number,
      price: PropTypes.number,
      stars: PropTypes.number,
      aboutProduct: PropTypes.string,
      name: PropTypes.string,
      uid: PropTypes.string,
      thumbnail: PropTypes.string,
      thumbnailURL: PropTypes.string,
    }),
  ).isRequired,
  title: PropTypes.string,
};
export default Products;
