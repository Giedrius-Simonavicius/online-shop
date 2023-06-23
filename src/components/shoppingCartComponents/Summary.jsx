import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import ArrowUpDown from '../openClose/ArrowUpDown';
import { useShoppingCartCtx } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../helperFns';
import { allPrd } from '../../data/data';

function Summary() {
  const { cartArr, deliveryFee } = useShoppingCartCtx();
  const itemsPrice = cartArr.reduce((total, currentCartItem) => {
    const item = allPrd.find((i) => currentCartItem.id === i.id);
    return total + currentCartItem.quantity * (item?.discountedPrice || 0);
  }, 0);
  const totalPrice = itemsPrice + deliveryFee;

  return (
    <div className="container mx-auto mt-10 h-fit w-[33%] bg-color1 px-6 py-3">
      <h2 className="border-b pb-4">Order Summary</h2>

      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className="mb-3 flex items-end gap-[15.5rem] font-bold">
              <p className="mt-3 text-sm font-bold">
                {cartArr.reduce((total, item) => total + item.quantity, 0)}{' '}
                Items in Cart
              </p>
              <ArrowUpDown open={open} />
            </Disclosure.Button>

            <Transition
              show={open}
              enter="transition duration-300 transform origin-top"
              enterFrom="opacity-0 scale-y-0"
              enterTo="opacity-100 scale-y-100"
              leave="transition duration-300 transform origin-top"
              leaveFrom="opacity-100 scale-y-100"
              leaveTo="opacity-0 scale-y-0"
            >
              <Disclosure.Panel className="text-xs">
                {cartArr.map((cartItem) => {
                  const item = allPrd.find(
                    (product) => product.id === cartItem.id,
                  );

                  if (item) {
                    return (
                      <div className="mb-6 flex gap-2" key={item.id}>
                        <div className="h-16 w-16">
                          <img src={item.thumbnail} alt={item.name} />
                        </div>
                        <div className="flex flex-col justify-around">
                          <p className="w-1/2 w-fit text-xs font-normal">
                            {item.aboutProduct.slice(0, 40)}...
                          </p>
                          <div className="flex gap-2">
                            <p className="text-xs font-normal text-color5">
                              Qty {cartItem.quantity}
                            </p>
                            <p>
                              {formatCurrency(
                                (
                                  item.discountedPrice * cartItem.quantity
                                ).toFixed(2),
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <p className="text-sm font-normal">Items: {formatCurrency(itemsPrice)}</p>
      <p className="text-sm font-normal">
        Delivery fee: {formatCurrency(deliveryFee)}
      </p>
      <p className="mt-1 border-t pt-1">Total: {formatCurrency(totalPrice)}</p>
    </div>
  );
}

export default Summary;