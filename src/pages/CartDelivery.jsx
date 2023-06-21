import React from 'react';
import DeliveryForm from '../components/forms/DeliveryForm';
import Summary from '../components/shoppingCartComponents/Summary';

function CartDelivery() {
  return (
    <div className="container mx-auto">
      <h2 className="my-4 text-2xl font-bold">Delivery</h2>
      <div className="flex gap-10">
        <DeliveryForm />
        <Summary />
      </div>
    </div>
  );
}

export default CartDelivery;
