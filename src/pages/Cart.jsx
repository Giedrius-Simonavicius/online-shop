import React from 'react';
import { useShoppingCartCtx } from '../context/ShoppingCartContext';
import { formatCurrency } from '../helperFns';
import SingleCartComponent from '../components/shoppingCartComponents/singleCartComponent';
import { allPrd } from '../data/data';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const { cartArr, setCartArr } = useShoppingCartCtx();

  function navigateToAllProducts() {
    navigate('/all-products');
  }
  function handleProceedToCheckout() {
    navigate('/cart/delivery');
  }

  return (
    <div className="container mx-auto">
      <h2 className="my-4 text-2xl font-bold">Shopping Cart</h2>
      <div>
        {cartArr.map((item) => (
          <SingleCartComponent key={item.id} {...item} />
        ))}
      </div>
      <div className="mt-5 flex justify-between text-right text-lg">
        <div className="flex gap-4">
          <button
            onClick={navigateToAllProducts}
            className="rounded-full border border-color10 px-4 py-1 text-sm text-color10 duration-200 hover:bg-color10 hover:text-white"
          >
            Continue shopping
          </button>
          <button
            className="rounded-full border bg-black px-4 py-1 text-sm text-white duration-200 hover:bg-white hover:text-black "
            onClick={() => setCartArr([])}
          >
            Clear shopping cart
          </button>
        </div>

        <button
          onClick={handleProceedToCheckout}
          className="rounded-full border border-color3 bg-color3 px-4 py-1 text-sm text-white duration-200 hover:bg-white hover:text-color3"
        >
          Proceed to Checkout{' '}
        </button>
      </div>
      <div className="mt-4 flex justify-end">
        <p className="text-2xl">
          Total:{' '}
          {formatCurrency(
            cartArr.reduce((total, currentCartItem) => {
              const item = allPrd.find((i) => currentCartItem.id === i.id);
              return (
                total + currentCartItem.quantity * (item?.discountedPrice || 0)
              );
            }, 0),
          )}
        </p>
      </div>
    </div>
  );
}

export default Cart;
