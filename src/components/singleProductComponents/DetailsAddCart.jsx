import React from 'react';

function DetailsAddCart({ activeTab, onTabClick, onAddToCart }) {
  const quantity = 1;
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
      {quantity === 0 ? (
        <button
          onClick={onAddToCart}
          className="color1 mr-6 rounded-full bg-color3 px-7 py-3 text-white"
        >
          + Add to Cart
        </button>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-center gap-2">
            <button>-</button>
            <div>
              <span>{quantity}</span> in cart
            </div>{' '}
            <button>+</button>
          </div>
          <button className="rounded-md bg-color8 px-4 py-2 text-white">
            Remove
          </button>
        </div>
      )}
    </div>
  );
}

export default DetailsAddCart;
