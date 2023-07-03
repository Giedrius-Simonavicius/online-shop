import React from 'react';
import Card from '../card/Card';
import { useGeneralCtx } from '../../context/GeneralProvider';

function Services() {
  const { smScreen } = useGeneralCtx();
  return (
    <div className="container mx-auto my-12">
      <div className={`${smScreen ? 'flex-col' : ''} flex justify-around`}>
        <Card>
          <img
            loading="lazy"
            className="mx-auto my-4"
            src="/icons/ourServices/Account.svg"
            alt="Support"
          />
          <h3 className="text-center font-bold ">Product Support</h3>
          <p className="mt-4 w-full text-center text-xs font-light">
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
          <p className="mt-4 w-full text-center text-xs font-light">
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
          <p className="mt-4 w-full text-center text-xs font-light">
            Up to 3 years on-site warranty available for your peace of mind.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Services;
