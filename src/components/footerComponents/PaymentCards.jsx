import React from 'react';

function PaymentCards() {
  return (
    <div className="flex gap-3 text-sm">
      <img src="/images/cards/paypal.svg" alt="paypal" />
      <img src="/images/cards/visa.svg" alt="visa" />
      <img src="/images/cards/maestro.svg" alt="maestro" />
      <img src="/images/cards/discover.svg" alt="discover" />
      <img
        className="pt-2"
        src="/images/cards/american-express.svg"
        alt="americanExpress"
      />
    </div>
  );
}

export default PaymentCards;
