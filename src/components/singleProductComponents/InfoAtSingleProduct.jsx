import React from 'react';

function InfoAtSingleProduct() {
  return (
    <div className="bg-[url('/images/singleProductImages/infoBg.jpg')] bg-right bg-no-repeat px-10  py-[6.8rem]">
      <div className="mx-auto flex w-[25vw] flex-col gap-4 lg:mr-[60%] lg:w-2/5">
        <button className="xs flex justify-between rounded-md border-2 bg-white px-4 py-3 text-left sm:w-[50vw] sm:text-sm xs:text-xxs">
          Product Support <span className="text-color3">&#8594;</span>
        </button>
        <button className="xs flex justify-between rounded-md border-2 bg-white px-4 py-3 text-left sm:w-[50vw] sm:text-sm xs:text-xxs">
          FAQ <span className="text-color3">&#8594;</span>
        </button>
        <button className="xs flex justify-between rounded-md border-2 bg-white px-4 py-3 text-left sm:w-[50vw] sm:text-sm xs:text-xxs">
          Our Buyer Guide <span className="text-color3">&#8594;</span>
        </button>
      </div>
    </div>
  );
}

export default InfoAtSingleProduct;
