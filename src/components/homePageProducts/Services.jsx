import React from 'react';
import Card from '../card/Card';

function Services() {
  return (
    <div className="container my-12">
      <div className="flex justify-between">
        <Card>
          <img
            className="mx-auto my-4"
            src="../../../public/icons/ourServices/Account.svg"
            alt="Support"
          />
          <h3 className="text-center font-bold ">Product Support</h3>
          <p className="text-center text-xs w-64 font-light mt-4">
            Up to 3 years on-site warranty available for your peace of mind.
          </p>
        </Card>
        <Card>
          <img
            className="mx-auto my-4"
            src="../../../public/icons/ourServices/Saving.svg"
            alt="Support"
          />
          <h3 className="text-center font-bold ">Product Support</h3>
          <p className="text-center text-xs w-64 font-light mt-4">
            Up to 3 years on-site warranty available for your peace of mind.
          </p>
        </Card>
        <Card>
          <img
            className="mx-auto my-4"
            src="../../../public/icons/ourServices/Support.svg"
            alt="Support"
          />
          <h3 className="text-center font-bold ">Product Support</h3>
          <p className="text-center text-xs w-64 font-light mt-4">
            Up to 3 years on-site warranty available for your peace of mind.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Services;
