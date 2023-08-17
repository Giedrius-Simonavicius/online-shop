import React from 'react';

function AccessDenied(cart) {
  return (
    <div>
      <h1 className="my-16 text-center text-5xl font-bold md:text-3xl">
        {cart ? 'Cart is empty' : 'Access Denied'}
      </h1>
    </div>
  );
}

export default AccessDenied;
