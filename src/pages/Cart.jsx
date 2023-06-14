import React from 'react';
import { useAuthCtx } from '../store/AuthProvider';

function Cart() {
  const { cartArr } = useAuthCtx();

  const cartItems = cartArr.reduce((accumulator, current) => {
    const existingItem = accumulator.find((item) => item.id === current.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      accumulator.push({ ...current, quantity: 1 });
    }

    return accumulator;
  }, []);

  function totalPrice() {
    let total = 0;
    cartArr.forEach((cObj) => (total += +cObj.discountedPrice));
    return total.toFixed(2);
  }

  return (
    <div className="container mx-auto">
      <h2 className="my-4 text-2xl font-bold">Shopping Cart</h2>
      <table>
        <tr className="text-left">
          <th className="py-2">Item</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Subtotal</th>
        </tr>

        {cartItems.map((item) => (
          <tr key={item.id} className="border-y">
            <td className="flex gap-6 py-3">
              <img src={item.thumbnail} alt={item.name} />
              <p className="w-[40%]">{item.aboutProduct}</p>
            </td>
            <td>
              <p>${item.discountedPrice}</p>
            </td>
            <td>
              <input type="number" placeholder={item.quantity} />
            </td>
            <td>
              <p>{`$ ${totalPrice()}`}</p>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Cart;
