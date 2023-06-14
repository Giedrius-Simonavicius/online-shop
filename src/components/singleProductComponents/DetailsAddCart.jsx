import React from 'react';

function DetailsAddCart({ activeTab, onTabClick, onAddToCart }) {
  return (
    <div className="mb-3 flex justify-between border-y-2 py-3 text-xs">
      <div className="flex gap-9 px-10">
        <button
          className={`mr-2 ${
            activeTab === 'about' ? 'border-b-2 border-color3 font-bold' : ''
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

      <button
        onClick={onAddToCart}
        className="color1 mr-6 rounded-full bg-color3 px-7 py-3 text-white"
      >
        + Add to Cart
      </button>
    </div>
  );
}

export default DetailsAddCart;
