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
          className="color1 mr-6 rounded-full border border-color3 bg-color3 px-7 py-3 text-white duration-200 hover:bg-white hover:text-color3"
        >
          + Add to Cart
        </button>
      ) : (
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center gap-2">
            <button
              className="mx-1 rounded-md border bg-color3 px-1.5 text-white duration-200 hover:border-color3 hover:bg-white hover:text-color3"
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
              className="mx-1 rounded-md border bg-color3 px-1.5 text-white duration-200 hover:border-color3 hover:bg-white hover:text-color3"
              onClick={() => {
                increaseCartQuantity(
                  product.id,
                  '',
                  'added to cart',
                  product.availableQty,
                );
              }}
            >
              +
            </button>
          </div>
          <button
            onClick={() => {
              removeFromCart(product.id);
            }}
            className="rounded-md border border-color8 px-2 py-1 text-color8 duration-200 hover:bg-color8 hover:text-white"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
}

export default DetailsAddCart;
