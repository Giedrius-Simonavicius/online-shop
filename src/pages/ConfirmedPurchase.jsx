import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ConfirmedPurchase() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, []);

  useEffect(() => {
    if (timer === 0) {
      navigate('/home');
    }
  }, [timer, navigate]);

  return (
    <div>
      <h1 className="my-16 text-center text-5xl font-bold md:text-3xl">
        Thank you for your purchase!
      </h1>
      <h2 className="text-center">Returning to home page in {timer}</h2>
    </div>
  );
}

export default ConfirmedPurchase;
