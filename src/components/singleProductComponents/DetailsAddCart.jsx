import React from 'react';
import { useShoppingCartCtx } from '../../context/ShoppingCartContext';

function DetailsAddCart({ activeTab, onTabClick, product }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCartCtx();

  const quantity = getItemQuantity(product.id);

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
          onClick={() => {
            increaseCartQuantity(product.id, product.inStock);
          }}
          className="color1 mr-6 rounded-full bg-color3 px-7 py-3 text-white"
        >
          + Add to Cart
        </button>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => {
                decreaseCartQuantity(product.id);
              }}
            >
              -
            </button>
            <div>
              <span>{quantity}</span> in cart
            </div>
            <button
              onClick={() => {
                increaseCartQuantity(product.id);
              }}
            >
              +
            </button>
          </div>
          <button
            onClick={() => {
              removeFromCart(product.id);
            }}
            className="rounded-md bg-color8 px-4 py-2 text-white"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
}

export default DetailsAddCart;
