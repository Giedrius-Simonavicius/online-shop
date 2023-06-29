import React from 'react';
import Card from '../card/Card';

function Services() {
  return (
    <div className="container my-12">
      <div className="flex justify-around">
        <Card>
          <img
            loading="lazy"
            className="mx-auto my-4"
            src="/icons/ourServices/Account.svg"
            alt="Support"
          />
          <h3 className="text-center font-bold ">Product Support</h3>
          <p className="mt-4 w-64 text-center text-xs font-light">
            Up to 3 years on-site warranty available for your peace of mind.
          </p>
        </Card>
        <Card>
          <img
            loading="lazy"
            className="mx-auto my-4"
            src="/icons/ourServices/Saving.svg"
            alt="Support"
          />
          <h3 className="text-center font-bold ">Product Support</h3>
          <p className="mt-4 w-64 text-center text-xs font-light">
            Up to 3 years on-site warranty available for your peace of mind.
          </p>
        </Card>
        <Card>
          <img
            loading="lazy"
            className="mx-auto my-4"
            src="/icons/ourServices/Support.svg"
            alt="Support"
          />
          <h3 className="text-center font-bold ">Product Support</h3>
          <p className="mt-4 w-64 text-center text-xs font-light">
            Up to 3 years on-site warranty available for your peace of mind.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Services;
