import React, { useEffect, useState } from 'react';
import Filter from '../components/AllProdComponents/Filter';
import { useGeneralCtx } from '../context/GeneralProvider';
import { Link, useLocation } from 'react-router-dom';
import { filterProducts } from '../components/AllProdComponents/filterUtils';
import Brands from '../components/homePageProducts/Brands';
import { capitalizeFirstLetter } from '../helperFns';
import Pagination from '../components/Pagination';
import SingleItemCard from '../components/card/SingleItemCard';
import ListView from '../components/AllProdComponents/ListView';

function AllProducts({ products }) {
  const [categoryNameDisplay, setCategoryNameDisplay] =
    useState('all-products');

  const [activeViewColor, setActiveViewColor] = useState('black');
  const [activeViewColor1, setActiveViewColor1] = useState('#A2A6B0');
  const [activeButton, setActiveButton] = useState(2);
  function changeViewColor() {
    setActiveViewColor('#A2A6B0');
    setActiveViewColor1('black');
    setActiveButton(1);
  }
  function changeViewColor1() {
    setActiveViewColor('black');
    setActiveViewColor1('#A2A6B0');
    setActiveButton(2);
  }

  const { filterArr, setFilterArr, searchResults, setSearchResults } =
    useGeneralCtx();
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

  const handleDeleteFilter = (index) => {
    const updatedFilters = [...filterArr];
    updatedFilters.splice(index, 1);
    setFilterArr(updatedFilters);
  };

  const [sortCategory, setSortCategory] = useState('Unsorted');
  const [sortDirection, setSortDirection] = useState(true);

  const sortCategories = [
    'Unsorted',
    'Price',
    'Rating',
    'Discount',
    'Category',
    'Availability',
  ];

  const filteredProducts = filterProducts(products, filterArr);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const sortedProducts = sortItems(
    sortCategory,
    filteredProducts,
    sortDirection,
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedProducts = sortedProducts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const paginatedSearchProducts = searchResults.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const howManyToDisplay = [5, 10, 20, 30, 50];

  function sortItems(category, products, sortDirection) {
    switch (category) {
      case 'Unsorted':
        return products;
      case 'Price':
        return sortDirection
          ? [...products].sort((a, b) => a.discountedPrice - b.discountedPrice)
          : [...products].sort((a, b) => b.discountedPrice - a.discountedPrice);
      case 'Rating':
        return sortDirection
          ? [...products].sort((a, b) => b.stars - a.stars)
          : [...products].sort((a, b) => a.stars - b.stars);
      case 'Discount':
        return sortDirection
          ? [...products].sort((a, b) => b.discount - a.discount)
          : [...products].sort((a, b) => a.discount - b.discount);
      case 'Category':
        return sortDirection
          ? [...products].sort((a, b) => a.category.localeCompare(b.category))
          : [...products].sort((a, b) => b.category.localeCompare(a.category));
      case 'Availability':
        return sortDirection
          ? [...products].sort((a, b) => {
              if (a.inStock && !b.inStock) return -1;
              if (!a.inStock && b.inStock) return 1;
              return 0;
            })
          : [...products].sort((a, b) => {
              if (!a.inStock && b.inStock) return -1;
              if (a.inStock && !b.inStock) return 1;
              return 0;
            });
      default:
        return products;
    }
  }

  return (
    <div className="container mx-auto flex flex-col px-6">
      {searchResults.length !== 0 ? (
        <div>
          <h2 className="my-4 text-center text-xl font-bold">
            {searchResults.length}{' '}
            {searchResults.length === 1 ||
            (searchResults.length % 10 === 1 && searchResults.length !== 11)
              ? 'item'
              : 'items'}{' '}
            found
          </h2>
          <div className="flex justify-end text-sm text-color5">
            <p>Display:</p>
            <select
              className="mx-2 rounded-md border border-color5 text-xs focus:outline-none"
              value={itemsPerPage}
              onChange={(event) => {
                setItemsPerPage(event.target.value);
              }}
            >
              {howManyToDisplay.map((number) => (
                <option value={number} key={number}>
                  {number}
                </option>
              ))}
            </select>
          </div>

          <div className="mx-auto flex flex-wrap">
            {paginatedSearchProducts.map((product, index) => (
              <Link
                to={`/all-products/${product.id}`}
                onClick={() => setSearchResults([])}
                key={index}
              >
                <SingleItemCard
                  hover={'my-4 hover:scale-110  duration-200 hover:px-3'}
                  key={index}
                  width="max-w-48"
                  product={product}
                />
              </Link>
            ))}
          </div>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={searchResults.length}
            filteredProducts={searchResults}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      ) : (
        <>
          <h1 className="mx-auto mb-3 text-center text-2xl font-bold uppercase tracking-widest">
            {categoryNameDisplay}
          </h1>
          <div className="ml-auto flex gap-5">
            <div className="flex items-center text-sm text-color5">
              <p>Sort By:</p>
              <select
                className="mx-2 rounded-md border border-color5 text-xs text-color5 focus:outline-none"
                value={sortCategory}
                onChange={(event) => {
                  setSortCategory(event.target.value);
                }}
              >
                {sortCategories.map((category) => (
                  <option value={category} key={category}>
                    {category}
                  </option>
                ))}
              </select>
              <button
                className=" text-xs text-color5"
                onClick={() => {
                  setSortDirection(!sortDirection);
                }}
              >
                {sortDirection ? '\u25B2' : '\u25BC'}
              </button>
            </div>
            <div className="ml-auto flex items-center text-sm text-color5">
              <p>Display:</p>
              <select
                className="mx-2 rounded-md border border-color5 text-xs focus:outline-none"
                value={itemsPerPage}
                onChange={(event) => {
                  setItemsPerPage(event.target.value);
                }}
              >
                {howManyToDisplay.map((number) => (
                  <option value={number} key={number}>
                    {number}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-2">
              <button
                className={`px-2 ${activeButton === 1 ? ' ' : 'shadow-md'}`}
                onClick={changeViewColor1}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.900391"
                    y="0.900024"
                    width="3.57143"
                    height="3.57143"
                    fill={activeViewColor}
                    stroke={activeViewColor}
                  />
                  <rect
                    x="0.900391"
                    y="8.21429"
                    width="3.57143"
                    height="3.57143"
                    fill={activeViewColor}
                    stroke={activeViewColor}
                  />
                  <rect
                    x="0.900391"
                    y="15.5286"
                    width="3.57143"
                    height="3.57143"
                    fill={activeViewColor}
                    stroke={activeViewColor}
                  />
                  <rect
                    x="8.21387"
                    y="8.21429"
                    width="3.57143"
                    height="3.57143"
                    fill={activeViewColor}
                    stroke={activeViewColor}
                  />
                  <rect
                    x="8.21387"
                    y="15.5286"
                    width="3.57143"
                    height="3.57143"
                    fill={activeViewColor}
                    stroke={activeViewColor}
                  />
                  <rect
                    x="8.21387"
                    y="0.900024"
                    width="3.57143"
                    height="3.57143"
                    fill={activeViewColor}
                    stroke={activeViewColor}
                  />
                  <rect
                    x="15.5283"
                    y="8.21429"
                    width="3.57143"
                    height="3.57143"
                    fill={activeViewColor}
                    stroke={activeViewColor}
                  />
                  <rect
                    x="15.5283"
                    y="15.5286"
                    width="3.57143"
                    height="3.57143"
                    fill={activeViewColor}
                    stroke={activeViewColor}
                  />
                  <rect
                    x="15.5283"
                    y="0.900024"
                    width="3.57143"
                    height="3.57143"
                    fill={activeViewColor}
                    stroke={activeViewColor}
                  />
                </svg>
              </button>
              <button
                className={` ${activeButton === 1 ? 'shadow-md' : ''}`}
                onClick={changeViewColor}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" fill="white" />
                  <rect
                    x="4.57129"
                    y="21.0286"
                    width="9.14286"
                    height="2.74286"
                    fill={activeViewColor1}
                  />
                  <rect
                    x="4.57129"
                    y="8.22858"
                    width="21.9429"
                    height="2.74286"
                    fill={activeViewColor1}
                  />
                  <rect
                    x="4.57129"
                    y="14.6286"
                    width="16.4571"
                    height="2.74286"
                    fill={activeViewColor1}
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="container mx-auto mb-12 mt-12 flex">
            <div>
              <div className="bg-color1 p-4">
                <Filter />
              </div>
              <Brands small />
              <div className="mt-3 w-fit bg-color1 p-4 text-center">
                <h3 className="text-xs font-bold">Compare Products</h3>
                <p className="my-2 text-xxs">You have no items to compare.</p>
              </div>
              <div className="my-2 w-fit bg-color1 p-4 text-center">
                <h3 className="text-xs font-bold">My Wish List</h3>
                <p className="my-2 text-xxs">
                  You have no items in your wish list.
                </p>
              </div>
              <img loading="lazy" src="/images/ads/chairAd.jpg" alt="chair" />
            </div>
            <div
              className={` ${
                activeButton !== 2 ? 'flex flex-col' : 'ml-4 flex flex-col'
              }`}
            >
              <div className="mb-3 flex gap-2 text-sm">
                {filterArr.length !== 0 && (
                  <button
                    onClick={() => setFilterArr([])}
                    className="mr-3  duration-200 hover:text-color8"
                  >
                    Clear All
                  </button>
                )}
                {filterArr.map((fObj, index) => (
                  <div className="flex gap-1 border py-1 pl-5 pr-2" key={index}>
                    <p>{capitalizeFirstLetter(fObj)}</p>

                    <button
                      className="ml-3"
                      onClick={() => handleDeleteFilter(index)}
                    >
                      {' '}
                      <img
                        loading="lazy"
                        src="/icons/ui/deleteBtn.svg"
                        alt="deleteBtn"
                      />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mx-auto flex flex-wrap">
                {paginatedProducts.length === 0 && (
                  <p>No availbale items with current filters</p>
                )}
                {paginatedProducts.map((product, index) => {
                  if (!product.thumbnail) {
                    return null;
                  }
                  return (
                    <>
                      {activeButton === 2 ? (
                        <Link to={`/all-products/${product.id}`} key={index}>
                          <SingleItemCard
                            hover={
                              'my-4 hover:scale-110 duration-200 hover:px-3'
                            }
                            key={index}
                            width="max-w-48"
                            product={product}
                          />
                        </Link>
                      ) : (
                        <Link to={`/all-products/${product.id}`} key={index}>
                          <ListView product={product} />
                        </Link>
                      )}
                    </>
                  );
                })}
              </div>
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={filteredProducts.length}
                filteredProducts={filteredProducts}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AllProducts;
