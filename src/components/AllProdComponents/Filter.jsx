import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import { useLocation } from 'react-router-dom';
import InStockFilter from './InStockFilter';
import RatingFilter from './RatingFilter';
import { useGeneralCtx } from '../../context/GeneralProvider';
import { capitalizeFirstLetter } from '../../helperFns';

function Filter() {
  const location = useLocation();
  const hideCategoryFilter = location.pathname.startsWith('/all-products/');

  const { smScreen, filterArr, setFilterArr } = useGeneralCtx();
  function closeFn() {
    document.getElementById('filters').style.width = '0%';
    document.getElementById('filters').style.height = '0%';
    document.getElementById('filters').style.zIndex = '-1';
    document.getElementById('filters').style.padding = '0';
  }
  const handleDeleteFilter = (index) => {
    const updatedFilters = [...filterArr];
    updatedFilters.splice(index, 1);
    setFilterArr(updatedFilters);
  };
  return (
    <div id="filters" className={` ${smScreen ? 'onTop' : ''} mr-3 w-36`}>
      {smScreen && (
        <div className="mb-3 flex items-center justify-between border-b-2 pb-4">
          <h3 className="text-3xl font-bold">Filter By</h3>
          <button
            className={`${
              filterArr.length !== 0 ? 'text-color9' : 'text-color8'
            } text-4xl `}
            onClick={closeFn}
          >
            {filterArr.length !== 0 ? '\u2713' : '\u00D7'}
          </button>
        </div>
      )}
      {!hideCategoryFilter && <CategoryFilter />}
      <PriceFilter />
      <InStockFilter />
      <RatingFilter />
      {filterArr.length !== 0 && (
        <button
          onClick={() => setFilterArr([])}
          className="mt-7 text-base duration-200 hover:text-color8"
        >
          {smScreen ? 'Clear All filters' : 'Clear All'}
        </button>
      )}
      <div className="my-6 flex flex-wrap gap-2 text-base">
        {filterArr.map((fObj, index) => (
          <div
            className="flex min-w-fit  items-center gap-1 border py-1 pl-5 pr-2  sm:pl-0 sm:pr-2"
            key={index}
          >
            {' '}
            {smScreen && (
              <button
                className="ml-1 min-w-fit"
                onClick={() => handleDeleteFilter(index)}
              >
                <img src="/icons/ui/deleteBtn.svg" alt="deleteBtn" />
              </button>
            )}
            <p>{capitalizeFirstLetter(fObj)}</p>
            {!smScreen && (
              <button
                className="ml-3"
                onClick={() => handleDeleteFilter(index)}
              >
                <img src="/icons/ui/deleteBtn.svg" alt="deleteBtn" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
