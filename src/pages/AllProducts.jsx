import React, { useEffect, useState } from 'react';
import Card from '../components/card/Card';
import Filter from '../components/AllProdComponents/Filter';
import { useAuthCtx } from '../store/AuthProvider';
import { Link } from 'react-router-dom';
import { filterProducts } from '../components/AllProdComponents/filterUtils';

function AllProducts({ products }) {
  const [inStock, setInStock] = useState([]);
  const [stars, setStars] = useState([]);
  const { filterArr, setFilterArr, capitalizeFirstLetter, renderStars } =
    useAuthCtx();

  useEffect(() => {
    if (products) {
      setInStock(products.map((product) => product.inStock));
      setStars(products.map((product) => product.stars));
    }
  }, [products]);

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

  return (
    <div className="container  mx-auto mb-12 mt-12 flex">
      <div>
        <Filter />
      </div>

      <div className="flex-col">
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
        <div className="mx-auto flex flex-wrap">
          {filteredProducts.map((product, index) => {
            if (!product.thumbnail) {
              return null;
            }

            return (
              <Link to={`/all-products/${product.id}`} key={index}>
                <Card key={index} width="max-w-48">
                  {inStock[index] ? (
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
                  <div className="mb-3 flex">{renderStars(stars[index])}</div>
                  <h3 className="mb-3 w-36 max-w-prose overflow-hidden text-sm font-normal">
                    {product.description}
                  </h3>
                  <p className="text-sm font-normal text-color10 line-through">
                    {product.price}
                  </p>
                  <p className="text-sm font-medium">{product.price}</p>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
