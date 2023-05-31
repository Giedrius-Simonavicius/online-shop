import React from 'react';

function DetailsAddCart({ activeTab, onTabClick }) {
  return (
    <div className="flex justify-between py-7 text-xs">
      <div className="flex gap-9">
        <button
          className={`mr-2 ${activeTab === 'about' ? 'font-bold' : ''}`}
          onClick={() => onTabClick('about')}
        >
          About Product
        </button>
        <button
          className={`mr-2 ${activeTab === 'details' ? 'font-bold' : ''}`}
          onClick={() => onTabClick('details')}
        >
          Details
        </button>
        <button
          className={`mr-2 ${activeTab === 'specs' ? 'font-bold' : ''}`}
          onClick={() => onTabClick('specs')}
        >
          Specs
        </button>
      </div>
      <div className="flex gap-6">
        <input
          className="w-12 bg-color1 pl-3 pr-1 focus:outline-none"
          type="number"
          placeholder="0"
        />
        <button className="color1 rounded-full bg-color3 px-7 py-3 text-white">
          Add to Cart
        </button>
        <button className="rounded-full bg-[#FFB800] px-7 py-3">
          <img
            className="scale-90"
            src="../../../public/icons/ui/paypalBtnLogo.svg"
            alt="paypal"
          />
        </button>
      </div>
    </div>
  );
}

export default DetailsAddCart;
