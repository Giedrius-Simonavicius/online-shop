import React from 'react';
import { useShoppingCartCtx } from '../../context/ShoppingCartContext';
import PropTypes from 'prop-types';

function AddToCart({ product, list }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCartCtx();
  const quantity = getItemQuantity(product.uid);

  return (
    <div className="items-center justify-center sm:flex">
      {quantity === 0 ? (
        <button
          onClick={() => {
            increaseCartQuantity(product.uid, product.inStock, 'Added to cart');
          }}
          className={` ${
            list
              ? ' color1 mr-6 rounded-full border border-color3 bg-white px-5 py-1 text-color3 duration-200 hover:bg-color3  hover:text-white lg:mr-0'
              : 'color1 mr-6 rounded-full border border-color3 bg-color3 px-7 py-3 text-white duration-200 hover:bg-white hover:text-color3'
          }`}
        >
          + Add to Cart
        </button>
      ) : (
        <div className="flex gap-2">
          <div className="flex items-center justify-center gap-2">
            <button
              className="mx-1 rounded-md border bg-color3 px-1.5 text-white duration-200 hover:border-color3 hover:bg-white hover:text-color3"
              onClick={() => {
                decreaseCartQuantity(product.uid, 'removed from cart');
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
                  product.uid,
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
              removeFromCart(product.uid);
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
AddToCart.propTypes = {
  product: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    inStock: PropTypes.bool.isRequired,
    availableQty: PropTypes.number.isRequired,
  }).isRequired,
  list: PropTypes.any,
};

export default AddToCart;
