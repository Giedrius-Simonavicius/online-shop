import React, { useState } from 'react';
import DeliveryForm from '../components/forms/DeliveryForm';
import Summary from '../components/shoppingCartComponents/Summary';

function CartDelivery() {
  const [deliveryFee, setDeliveryFee] = useState(0);

  return (
    <div className="container mx-auto px-6">
      <h2 className="my-4 text-2xl font-bold">Delivery</h2>

      <div className="flex gap-10 sm:flex-col">
        <DeliveryForm setDeliveryFee={setDeliveryFee} />
        <Summary deliveryFee={deliveryFee} />
      </div>
    </div>
  );
}

export default CartDelivery;
