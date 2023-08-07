import React from 'react';
import { useShoppingCartCtx } from '../../context/ShoppingCartContext';
import { useGeneralCtx } from '../../context/GeneralProvider';
import { calculateDiscountedPrice, formatCurrency } from '../../helperFns';
import { useDataCtx } from '../../context/DataProvider';
import PropTypes from 'prop-types';

function SingleCartComponent({ uid, quantity }) {
  const { mdScreen } = useGeneralCtx();
  const { allPrd } = useDataCtx();

  const {
    cartArr,
    getItemQuantity,
    decreaseCartQuantity,
    increaseCartQuantity,
    removeFromCart,
  } = useShoppingCartCtx();

  const item = allPrd.find((i) => uid === i.uid);
  if (item == null) return null;

  const discountedPrice = calculateDiscountedPrice(item.price, item.discount);
  const subtotal = (discountedPrice * quantity).toFixed(2);
  return (
    cartArr !== [] && (
      <div>
        <div className="flex justify-between border-y md:flex-col">
          <div className="flex w-3/4 gap-6 py-6 md:w-full">
            <img src={item.thumbnailURL} alt={item.name} />
            <div className="flex flex-col justify-between md:justify-around">
              <p
                className={`${
                  mdScreen
                    ? 'w-full text-sm sm:text-xs'
                    : 'mb-2 w-1/2 text-sm font-normal lg:w-4/5 lg:text-xs'
                }`}
              >
                {item.aboutProduct}
              </p>
              <p className="text-xs sm:mt-2 sm:font-normal">
                In stock: {item.availableQty}
              </p>
            </div>
          </div>
          <div
            className={`${
              mdScreen
                ? 'flex items-center gap-5 pb-5 sm:gap-2 '
                : 'ml-auto flex items-center '
            }`}
          >
            <div>
              {mdScreen && <p className="text-xs sm:font-normal">Item price</p>}
              <p className="sm:text-sm">
                {formatCurrency(
                  calculateDiscountedPrice(item.price, item.discount),
                )}
              </p>
            </div>

            <div className="flex gap-2 px-5 sm:px-2">
              <button
                className="mx-1 rounded-md border bg-color3 px-1.5 text-white duration-200 hover:border-color3 hover:bg-white hover:text-color3"
                onClick={() => {
                  decreaseCartQuantity(item.uid, 'removed from cart');
                }}
              >
                -
              </button>

              <p>{getItemQuantity(item.uid)}</p>

              <button
                className="mx-1 rounded-md border bg-color3 px-1.5 text-white duration-200 hover:border-color3 hover:bg-white hover:text-color3"
                onClick={() => {
                  increaseCartQuantity(
                    item.uid,
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
              <div>
                {mdScreen && <p className="text-xs sm:font-normal">Subtotal</p>}
                <p className="sm:text-sm">{subtotal}</p>{' '}
              </div>
            </div>
            <button
              onClick={() => {
                removeFromCart(item.uid);
              }}
              className="ml-3 rounded-md border border-color8 px-2 text-color8 duration-200 hover:bg-color8 hover:text-white"
            >
              &times;
            </button>
          </div>
        </div>
      </div>
    )
  );
}
SingleCartComponent.propTypes = {
  uid: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
export default SingleCartComponent;
