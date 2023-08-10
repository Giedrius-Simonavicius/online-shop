import React from 'react';
import { useShoppingCartCtx } from '../context/ShoppingCartContext';
import { calculateDiscountedPrice, formatCurrency } from '../helperFns';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useGeneralCtx } from '../context/GeneralProvider';
import { useDataCtx } from '../context/DataProvider';
import SingleCartComponent from '../components/shoppingCartComponents/SingleCartComponent';

function Cart() {
  const { mdScreen, smScreen } = useGeneralCtx();
  const navigate = useNavigate();
  const { cartArr, setCartArr } = useShoppingCartCtx();
  const { allPrd } = useDataCtx();

  function navigateToAllProducts() {
    navigate('/all-products');
  }
  function handleProceedToCheckout() {
    navigate('/cart/delivery');
  }

  const itemsPrice = cartArr.reduce((total, currentCartItem) => {
    const item = allPrd.find((i) => currentCartItem.uid === i.uid);
    return (
      total +
        currentCartItem.quantity *
          calculateDiscountedPrice(item?.price, item?.discount) || 0
    );
  }, 0);

  return (
    <div className="container mx-auto px-8">
      <h2 className="my-4 text-2xl font-bold">Shopping Cart</h2>

      {cartArr.length === 0 ? (
        <p className="my-16 text-center text-5xl">No items in cart</p>
      ) : (
        <div>
          {cartArr.map((item) => (
            <SingleCartComponent key={item.uid} {...item} />
          ))}
        </div>
      )}

      <div
        className={` ${
          smScreen
            ? 'mt-5 text-lg'
            : 'mt-5 flex justify-between text-right text-lg'
        } `}
      >
        {smScreen && (
          <div>
            <div>
              <div className="text-center">
                <p className="mb-5 text-2xl">
                  Total: {formatCurrency(itemsPrice)}
                </p>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleProceedToCheckout}
                  className="min-w-full rounded-full border border-color3 bg-color3  px-10 py-4 text-sm text-white duration-200 hover:bg-white hover:text-color3"
                >
                  Proceed to Checkout{' '}
                </button>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between gap-4">
              <div className="flex">
                <button
                  onClick={navigateToAllProducts}
                  className="rounded-full border border-color10 px-10 py-2 text-sm text-color10 duration-200 hover:bg-color10 hover:text-white sm:px-4 sm:text-xs"
                >
                  Continue shopping
                </button>
              </div>
              <div>
                <button
                  className="rounded-full border bg-black px-10  py-2 text-sm text-white duration-200 hover:bg-white hover:text-black sm:px-4 sm:text-xs "
                  onClick={() => {
                    setCartArr([]);
                    navigateToAllProducts();
                    toast.success('Shopping cart cleared');
                  }}
                >
                  Clear shopping cart
                </button>
              </div>
            </div>
          </div>
        )}
        {smScreen ? null : (
          <div className="flex justify-between gap-4 md:flex-col">
            <div>
              <button
                onClick={navigateToAllProducts}
                className="rounded-full border border-color10 px-4 py-1 text-sm text-color10 duration-200 hover:bg-color10 hover:text-white md:px-10 md:py-2"
              >
                Continue shopping
              </button>
            </div>
            <div>
              <button
                title="Click to remove all items"
                className="rounded-full border bg-black px-4 py-1 text-sm text-white duration-200 hover:bg-white hover:text-black md:px-10 md:py-2 "
                onClick={() => {
                  setCartArr([]);
                  navigateToAllProducts();
                  toast.success('Shopping cart cleared');
                }}
              >
                Clear shopping cart
              </button>
            </div>
          </div>
        )}
        {mdScreen && !smScreen ? (
          <div className="flex flex-col justify-between">
            <div className="flex items-start justify-center">
              <p className="mb-5 text-2xl">
                Total: {formatCurrency(itemsPrice)}
              </p>
            </div>
            <div>
              <button
                onClick={handleProceedToCheckout}
                className="rounded-full border border-color3 bg-color3 px-4 py-1 text-sm text-white duration-200 hover:bg-white hover:text-color3 md:px-10 md:py-4"
              >
                Proceed to Checkout{' '}
              </button>
            </div>
          </div>
        ) : (
          !mdScreen && (
            <div>
              <div>
                <button
                  onClick={handleProceedToCheckout}
                  className="rounded-full border border-color3 bg-color3 px-4 py-1 text-sm text-white duration-200 hover:bg-white hover:text-color3 md:px-10 md:py-4"
                >
                  Proceed to Checkout{' '}
                </button>
              </div>{' '}
              <div className="mt-4 flex justify-end">
                <p className="text-2xl">Total: {formatCurrency(itemsPrice)}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Cart;
