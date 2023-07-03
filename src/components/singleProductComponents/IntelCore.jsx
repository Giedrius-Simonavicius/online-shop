import React from 'react';

function IntelCore() {
  return (
    <div className="flex items-center bg-black py-4 pl-4 text-xs text-white">
      <div className="flex w-1/2 flex-col justify-around gap-10 ">
        <h2 className="text-3xl font-[500] md:text-xl">
          Outplay the Competittion
        </h2>
        <p className="text-base font-light md:text-xs">
          Experience a 40% boost in computing from last generation. MSI Desktop
          equips the 10th Gen. Intel® Core™ i7 processor with the upmost
          computing power to bring you an unparalleled gaming experience.
        </p>
        <p className="text-base font-light md:text-xs ">
          *Performance compared to i7-9700. Specs varies by model.
        </p>
      </div>
      <div className="ml-4">
        <img src="/images/singleProductImages/intelCore.jpg" alt="intel" />
      </div>
    </div>
  );
}

export default IntelCore;
