import React, { useEffect, useState } from 'react';
import Card from '../components/card/Card';
import Filter from '../components/AllProdComponents/Filter';
import { useAuthCtx } from '../store/AuthProvider';

function AllProducts({ products }) {
  const [inStock, setInStock] = useState([]);
  const [stars, setStars] = useState([]);
  const { filterArr, setFilterArr } = useAuthCtx();

  useEffect(() => {
    setInStock(products.map((product) => product.inStock));
    setStars(products.map((product) => product.stars));
  }, [products]);

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

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

  const filterProducts = () => {
    if (filterArr.length === 0) {
      return products;
    } else {
      return products.filter((product) => filterArr.includes(product.category));
    }
  };

  const filteredProducts = filterProducts();

  const handleDeleteFilter = (index) => {
    const updatedFilters = [...filterArr];
    updatedFilters.splice(index, 1);
    setFilterArr(updatedFilters);
  };

  const countCategory = (category) => {
    return products.reduce((count, product) => {
      if (product.category === category) {
        return count + 1;
      }
      return count;
    }, 0);
  };

  const desktopCount = countCategory('desktops');
  const monitorCount = countCategory('monitors');
  const laptopCount = countCategory('laptops');
  const customCount = countCategory("custom PC's");

  return (
    <div className="container  mx-auto mb-12 mt-12 flex">
      <div>
        <Filter />
      </div>
      <div>delete</div>
      <div className="flex-col">
        <div className="mb-3 flex gap-2 text-sm">
          {filterArr.map((fObj, index) => (
            <div className=" flex gap-1 border py-1 pl-5 pr-2" key={index}>
              <p>{capitalizeFirstLetter(fObj)}</p>
              {fObj === 'desktops' && (
                <span className="font-light text-color5">{`(${desktopCount})`}</span>
              )}
              {fObj === 'monitors' && (
                <span className="font-light text-color5">{`(${monitorCount})`}</span>
              )}
              {fObj === 'laptops' && (
                <span className="font-light text-color5">{`(${laptopCount})`}</span>
              )}
              {fObj === "custom PC's" && (
                <span className="font-light text-color5">{`(${customCount})`}</span>
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
          {filteredProducts.map((product, index) =>
            index !== 0 ? (
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
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
