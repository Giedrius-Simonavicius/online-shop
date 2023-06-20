import React from 'react';
import { useShoppingCartCtx } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../helperFns';
import { allPrd } from '../../data/data';

function SingleCartComponent({ id, quantity }) {
  const {
    cartArr,
    getItemQuantity,
    decreaseCartQuantity,
    increaseCartQuantity,
    removeFromCart,
  } = useShoppingCartCtx();

  const item = allPrd.find((i) => id === i.id);

  if (item == null) return null;
  console.log('cartArr ===', cartArr);
  return (
    <div>
      <div className="flex justify-between border-y">
        <div className="flex w-2/3 gap-6 py-6">
          <img src={item.thumbnail} alt={item.name} />
          <p className="w-1/2 text-sm font-normal">{item.aboutProduct}</p>
        </div>
        <div className=" mr-auto flex items-center gap-5 ">
          <p>{formatCurrency(item.discountedPrice)}</p>

          <div className="flex gap-2 px-5 ">
            <button
              className=" mr-1 rounded-md bg-color3 px-1.5 text-white"
              onClick={() => {
                decreaseCartQuantity(item.id, 'removed from cart');
              }}
            >
              -
            </button>

            <p>{getItemQuantity(item.id)}</p>

            <button
              className=" ml-1 rounded-md bg-color3 px-1.5 text-white"
              onClick={() => {
                increaseCartQuantity(item.id, '', 'added to cart');
              }}
            >
              +
            </button>
          </div>

          <td>
            <div className="flex gap-2">
              <p>
                {formatCurrency((item.discountedPrice * quantity).toFixed(2))}
              </p>{' '}
              <button
                onClick={() => {
                  removeFromCart(item.id);
                }}
                className="rounded-md border border-color8 px-2 text-color8"
              >
                &times;
              </button>
            </div>
          </td>
        </div>
      </div>
    </div>
  );
}

export default SingleCartComponent;
