import React from 'react';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';

function Filter() {
  return (
    <div className="mr-3 w-36">
      <CategoryFilter />
      <PriceFilter />
    </div>
  );
}

export default Filter;
