import React from 'react';

function IntelCore() {
  return (
    <div className="flex items-center bg-black text-white">
      <div className="mx-auto flex w-1/4 flex-col gap-10 ">
        <h2 className="text-5xl font-[500]">Outplay the Competittion</h2>
        <p className="font-light">
          Experience a 40% boost in computing from last generation. MSI Desktop
          equips the 10th Gen. Intel® Core™ i7 processor with the upmost
          computing power to bring you an unparalleled gaming experience.
        </p>
        <p className="font-light">
          *Performance compared to i7-9700. Specs varies by model.
        </p>
      </div>
      <img src="/images/singleProductImages/intelCore.jpg" alt="intel" />
    </div>
  );
}

export default IntelCore;
