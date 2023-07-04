import React from 'react';
import { useShoppingCartCtx } from '../context/ShoppingCartContext';
import { capitalizeFirstLetter } from '../helperFns';
import Summary from '../components/shoppingCartComponents/Summary';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function CartReview() {
  const { shippingInfo, deliveryFee } = useShoppingCartCtx();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-6">
      <h2 className="my-4 text-2xl font-bold">Review</h2>
      <div className="flex justify-between sm:flex-col">
        <div className="mt-10 text-sm">
          <div>
            <h3 className="mb-2">Buyer info:</h3>
            <p className="font-normal">
              Name: {capitalizeFirstLetter(shippingInfo.name)}{' '}
              {capitalizeFirstLetter(shippingInfo.lastName)}
            </p>
            <p className="font-normal">Email: {shippingInfo.email}</p>
            <p className="font-normal">Phone no. {shippingInfo.phoneNo}</p>
          </div>
          <div>
            <h3 className="mb-2 mt-4 text-sm">Delivery address:</h3>
            <p className="font-normal">
              {capitalizeFirstLetter(shippingInfo.streetAddress)},{' '}
              {shippingInfo.postalCode}{' '}
              {capitalizeFirstLetter(shippingInfo.city)}, {shippingInfo.country}
            </p>
          </div>
          <button
            className="mt-8 rounded-full
             border-2 border-color9 bg-color9 px-8 py-1 font-normal text-white duration-200 hover:border-2 hover:bg-color1 hover:text-color7"
            onClick={() => toast.success('Thank you for your purchase')}
          >
            Confirm & purchase
          </button>
        </div>
        <Summary review deliveryFee={deliveryFee} />
      </div>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="mt-4 rounded-full
             border-2 border-color3 bg-color3 px-8 font-normal text-white duration-200 hover:border-2 hover:bg-color1 hover:text-color3"
      >
        Go back
      </button>
    </div>
  );
}

export default CartReview;
