import React from 'react';
import { useShoppingCartCtx } from '../context/ShoppingCartContext';
import { formatCurrency } from '../helperFns';
import SingleCartComponent from '../components/shoppingCartComponents/singleCartComponent';
import { allPrd } from '../data/data';

function Cart() {
  const { cartArr } = useShoppingCartCtx();

  function totalPrice() {
    let total = 0;
    cartArr.forEach((cObj) => {
      total += +cObj.discountedPrice * cObj.quantity;
    });
    return total.toFixed(2);
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
      <p className="mt-5 text-right text-lg">
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
  );
}

export default Cart;
