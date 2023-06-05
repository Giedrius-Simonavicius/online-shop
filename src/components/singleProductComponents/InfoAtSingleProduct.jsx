import React from 'react';

function InfoAtSingleProduct() {
  return (
    <div className="bg-[url('../../../public/images/singleProductImages/infoBg.jpg')] bg-right bg-no-repeat px-10  py-[6.8rem]">
      <div className="mx-auto flex w-1/5 flex-col gap-4">
        <button className="flex justify-between rounded-md  border-2 bg-white px-4 py-3 text-left">
          Product Support <span className="text-color3">&#8594;</span>
        </button>
        <button className="flex justify-between rounded-md  border-2 bg-white px-4 py-3 text-left">
          FAQ <span className="text-color3">&#8594;</span>
        </button>
        <button className="flex justify-between rounded-md  border-2 bg-white px-4 py-3 text-left">
          Our Buyer Guide <span className="text-color3">&#8594;</span>
        </button>
      </div>
    </div>
  );
}

export default InfoAtSingleProduct;
