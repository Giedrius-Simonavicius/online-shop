import React from 'react';

function FeaturesSingleProd() {
  return (
    <div className=" bg-[url('/images/singleProductImages/featBGImg.jpg')] py-12 text-center text-white">
      <h2 className="text-2xl">Features</h2>
      <p className="mx-auto max-w-sm py-4 text-center text-sm font-light">
        The MPG series brings out the best in gamers by allowing full expression
        in color with advanced RGB lighting control and synchronization.
      </p>
      <div className="mx-10 mt-10 flex justify-between gap-8 text-center text-xs">
        <div>
          <img
            loading="lazy"
            className="mx-auto mb-6 scale-[75%]"
            src="/images/singleProductImages/intel.svg"
            alt="intel"
          />
          <p className="max-w-[25rem] font-light ">
            <span className="font-bold">Intel® Core™ i7 </span>processor with
            the upmost computing power to bring you an unparalleled gaming
            experience.
          </p>
        </div>
        <div>
          <img
            loading="lazy"
            className="mx-auto mb-6 scale-[75%] "
            src="/images/singleProductImages/rtx.svg"
            alt="rtx"
          />
          <p className="max-w-[25rem] font-light ">
            The new <span className="font-bold">GeForce® RTX SUPER™</span>{' '}
            Series has more cores and higher clocks for superfast performance
            compared to previous-gen GPUs.
          </p>
        </div>
        <div>
          <img
            loading="lazy"
            className="mx-auto mb-6 scale-[75%] "
            src="/images/singleProductImages/ssd.svg"
            alt="ssd"
          />
          <p className="max-w-[25rem] font-light ">
            Unleash the full potential with the latest{' '}
            <span className="font-bold">SSD technology</span>, the NVM Express.
            6 times faster than traditional SATA SSD.
          </p>
        </div>
        <div>
          <img
            loading="lazy"
            className="mx-auto mb-6 scale-[75%] "
            src="/images/singleProductImages/ddr4.svg"
            alt="ddr4"
          />
          <p className="max-w-[25rem] font-light ">
            Featuring the latest{' '}
            <span className="font-bold">10th Gen Intel® Core™</span> processors,
            memory can support up to DDR4 2933MHz to delivers an unprecedented
            gaming experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSingleProd;
