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

  return (
    <div className="container mx-auto">
      <h2 className="my-4 text-2xl font-bold">Shopping Cart</h2>
      <div>
        <div className="flex justify-between">
          <h4 className="w-2/3 py-4">Item</h4>
          <div className="mr-auto flex gap-20">
            <h4>Price</h4>
            <h4 className="text-center">Qty</h4>
            <h4>Subtotal</h4>
          </div>
        </div>

        {cartArr.map((item) => (
          <SingleCartComponent key={item.id} {...item} />
        ))}
      </div>
      <div className="mt-5 flex justify-between text-right text-lg">
        <div className="flex gap-4">
          <button
            onClick={navigateToAllProducts}
            className="rounded-full border border-color10 px-4 py-1 text-sm text-color10"
          >
            Continue shopping
          </button>
          <button
            className="rounded-full border bg-black px-4 py-1 text-sm text-white"
            onClick={() => setCartArr([])}
          >
            Clear shopping cart
          </button>
        </div>
        <p>
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
