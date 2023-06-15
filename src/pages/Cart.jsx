import React, { useState } from 'react';
import { useGeneralCtx } from '../store/GeneralProvider';
import { formatCurrency } from '../helperFns';

function Cart() {
  const { cartArr, setCartArr } = useGeneralCtx();
  const [updatedCart, setUpdatedCart] = useState(cartArr);

  const uniqueItems = Array.from(
    new Set(updatedCart.map((item) => item.id)),
  ).map((id) => {
    return updatedCart.find((item) => item.id === id);
  });

  function updateQuantity(itemId, newQuantity) {
    const updatedCartArr = updatedCart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setUpdatedCart(updatedCartArr);
    setCartArr(updatedCartArr);
    console.log('updatedCart ===', updatedCart);
    console.log('cartArr ===', cartArr);
  }

  function totalPrice() {
    let total = 0;
    updatedCart.forEach((cObj) => {
      total += +cObj.discountedPrice * cObj.quantity;
    });
    return total.toFixed(2);
  }

  return (
    <div className="container mx-auto">
      <h2 className="my-4 text-2xl font-bold">Shopping Cart</h2>
      <table>
        <thead>
          <tr className="text-left">
            <th className="py-4">Item</th>
            <th>Price</th>
            <th className="text-center">Qty</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {uniqueItems.map((item) => (
            <tr key={item.id} className="border-y">
              <td className="flex w-[45%] gap-6 py-6">
                <img src={item.thumbnail} alt={item.name} />
                <p className="text-sm font-normal">{item.aboutProduct}</p>
              </td>
              <td>
                <p>{formatCurrency(item.discountedPrice)}</p>
              </td>
              <td className="text-center">
                <input
                  value={item.quantity}
                  className="w-[30%] bg-color1 py-2 pl-3 text-center"
                  type="number"
                  min={1}
                  onChange={(e) => {
                    const newQuantity = parseInt(e.target.value);
                    if (!isNaN(newQuantity) && newQuantity >= 0) {
                      updateQuantity(item.id, newQuantity);
                    }
                  }}
                />
              </td>
              <td>
                <p>
                  {formatCurrency(
                    (item.discountedPrice * item.quantity).toFixed(2),
                  )}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-5 text-right text-lg">
        Total: {formatCurrency(totalPrice())}
      </p>
    </div>
  );
}

export default Cart;
