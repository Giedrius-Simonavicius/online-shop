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
            increaseCartQuantity(product.id, product.inStock, 'added to cart');
          }}
          className="color1 mr-6 rounded-full bg-color3 px-7 py-3 text-white"
        >
          + Add to Cart
        </button>
      ) : (
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center gap-2">
            <button
              className="rounded-md bg-color3 px-1.5 py-0.5 text-white"
              onClick={() => {
                decreaseCartQuantity(product.id, 'removed from cart');
              }}
            >
              -
            </button>
            <div>
              <span>{quantity}</span> in cart
            </div>
            <button
              className="rounded-md bg-color3 px-1.5 py-0.5 text-white"
              onClick={() => {
                increaseCartQuantity(product.id, '', 'added to cart');
              }}
            >
              +
            </button>
          </div>
          <button
            onClick={() => {
              removeFromCart(product.id);
            }}
            className="rounded-md border border-color8 px-2 py-1 text-color8"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
}

export default DetailsAddCart;
