import React from 'react';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import { useLocation } from 'react-router-dom';

function Filter() {
  const location = useLocation();
  const hideCategoryFilter = location.pathname.startsWith('/all-products/');

  return (
    <div className="mr-3 w-36">
      {!hideCategoryFilter && <CategoryFilter />}
      <PriceFilter />
    </div>
  );
}

export default Filter;
