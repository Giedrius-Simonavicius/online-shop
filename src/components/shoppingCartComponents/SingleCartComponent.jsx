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
    cartArr !== [] && (
      <div>
        <div className="flex justify-between border-y">
          <div className="flex w-3/4 gap-6 py-6">
            <img src={item.thumbnail} alt={item.name} />
            <div className="flex flex-col justify-between">
              <p className="w-1/2 text-sm font-normal">{item.aboutProduct}</p>
              <p className="text-xs">In stock: {item.availableQty}</p>
            </div>
          </div>
          <div className=" mr-auto flex items-center gap-5 ">
            <p>{formatCurrency(item.discountedPrice)}</p>

            <div className="flex gap-2 px-5 ">
              <button
                className="mx-1 rounded-md border bg-color3 px-1.5 text-white duration-200 hover:border-color3 hover:bg-white hover:text-color3"
                onClick={() => {
                  decreaseCartQuantity(item.id, 'removed from cart');
                }}
              >
                -
              </button>

              <p>{getItemQuantity(item.id)}</p>

              <button
                className="mx-1 rounded-md border bg-color3 px-1.5 text-white duration-200 hover:border-color3 hover:bg-white hover:text-color3"
                onClick={() => {
                  increaseCartQuantity(
                    item.id,
                    '',
                    'added to cart',
                    item.availableQty,
                  );
                }}
              >
                +
              </button>
            </div>

            <div className="flex gap-2">
              <p>
                {formatCurrency((item.discountedPrice * quantity).toFixed(2))}
              </p>{' '}
              <button
                onClick={() => {
                  removeFromCart(item.id);
                }}
                className="ml-3 rounded-md border border-color8 px-2 text-color8 duration-200 hover:bg-color8 hover:text-white"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default SingleCartComponent;
