import React from 'react';

function DetailsAddCart({ activeTab, onTabClick }) {
  return (
    <div className="mb-3 flex justify-between border-y-2 py-3 text-xs">
      <div className="mb-5 mt-5 flex gap-9 px-10">
        <button
          className={`mr-2 ${
            activeTab === 'about' ? 'border-b-2 border-color3 font-bold  ' : ''
          }`}
          onClick={() => onTabClick('about')}
        >
          About Product
        </button>
        <button
          className={`mr-2 ${
            activeTab === 'details'
              ? 'border-b-2 border-color3 font-bold  '
              : ''
          }`}
          onClick={() => onTabClick('details')}
        >
          Details
        </button>
        <button
          className={`mr-2 ${
            activeTab === 'specs' ? 'border-b-2 border-color3 font-bold  ' : ''
          }`}
          onClick={() => onTabClick('specs')}
        >
          Specs
        </button>
      </div>
      <div className="mr-6 flex gap-6">
        <input
          className="w-12 bg-color1 pl-3 pr-1 focus:outline-none"
          type="number"
          placeholder="0"
        />
        <button className="color1 rounded-full bg-color3 px-7 py-3 text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default DetailsAddCart;
