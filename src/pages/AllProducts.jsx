import React, { useEffect, useState } from 'react';
import Card from '../components/card/Card';
import Filter from '../components/AllProdComponents/Filter';
import { useAuthCtx } from '../store/AuthProvider';
import { Link, useLocation } from 'react-router-dom';
import { filterProducts } from '../components/AllProdComponents/filterUtils';

function AllProducts({ products }) {
  const [categoryNameDisplay, setCategoryNameDisplay] =
    useState('all-products');
  const { filterArr, setFilterArr, capitalizeFirstLetter, renderStars } =
    useAuthCtx();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/all-products') {
      setCategoryNameDisplay('all-products');
    } else {
      const urlParts = location.pathname.split('/');
      const dynamicPart = urlParts[urlParts.length - 1];
      setCategoryNameDisplay(dynamicPart);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname.startsWith('/all-products/')) {
      const valuesToRemove = ["custom PC's", 'laptops', 'monitors', 'desktops'];
      const filteredArr = filterArr.filter(
        (value) => !valuesToRemove.includes(value),
      );
      filterArr.length = 0;
      filterArr.push(...filteredArr);
    }
  }, [location]);

  const categoryCounts = products.reduce((counts, product) => {
    counts[product.category] = (counts[product.category] || 0) + 1;
    return counts;
  }, {});

  const handleDeleteFilter = (index) => {
    const updatedFilters = [...filterArr];
    updatedFilters.splice(index, 1);
    setFilterArr(updatedFilters);
  };

  const filteredProducts = filterProducts(products, filterArr);
  console.log('filteredProducts ===', filteredProducts);
  return (
    <div>
      <h1 className="mx-auto mb-3 text-center text-2xl font-bold uppercase tracking-widest">
        {categoryNameDisplay}
      </h1>

      <div className="container  mx-auto mb-12 mt-12 flex">
        <div>
          <Filter />
        </div>
        <div className="ml-4 ">
          <div className="flex-col ">
            <div className="mb-3 flex gap-2 text-sm">
              {filterArr.map((fObj, index) => (
                <div className=" flex gap-1 border py-1 pl-5 pr-2" key={index}>
                  <p>{capitalizeFirstLetter(fObj)}</p>
                  {categoryCounts[fObj] && (
                    <span className="font-light text-color5">{`(${categoryCounts[fObj]})`}</span>
                  )}
                  <button
                    className="ml-3"
                    onClick={() => handleDeleteFilter(index)}
                  >
                    {' '}
                    <img src="/public/icons/ui/deleteBtn.svg" alt="deleteBtn" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto flex flex-wrap">
            {filteredProducts.length === 0 && (
              <p>No availbale items with current filters</p>
            )}
            {filteredProducts.map((product, index) => {
              if (!product.thumbnail) {
                return null;
              }
              return (
                <Link to={`/all-products/${product.id}`} key={index}>
                  <Card
                    hover={'my-4 hover:scale-110  duration-200 hover:px-3'}
                    key={index}
                    width="max-w-48"
                  >
                    {product.inStock ? (
                      <div className="flex gap-2">
                        <img
                          src="../../../public/icons/instock.svg"
                          alt="instock"
                        />
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
                    <div className="mb-3 flex">
                      {renderStars(product.stars)}
                    </div>
                    <h3 className="mb-3 w-36 max-w-prose overflow-hidden text-sm font-normal">
                      {product.description}
                    </h3>
                    {product.discount !== 0 && (
                      <div className="flex gap-3">
                        <p className=" text-sm font-normal text-color10 line-through">
                          {`$ ${product.price.toFixed(2)} `}
                        </p>
                        <span className="text-color8">{`-${product.discount}%`}</span>
                      </div>
                    )}

                    <p className="text-sm font-medium">
                      {`$ ${product.discountedPrice}`}
                    </p>
                    <p>{product.inStock.toString()}</p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
