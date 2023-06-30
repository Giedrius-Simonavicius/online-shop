import React from 'react';
import { useGeneralCtx } from '../../context/GeneralProvider';
import SocialMedia from '../headerComponents/SocialMedia';
import PaymentCards from '../footerComponents/PaymentCards';
import Links from '../footerComponents/Links';

function FooterComponent() {
  const { mdScreen } = useGeneralCtx();

  return (
    <footer className="bg-[#020202] px-10 font-normal text-white lg:text-xs">
      <div className="container mx-auto grid gap-8 pb-4 pt-8 lg:text-xxs">
        <div className="flex items-center justify-between text-center sm:flex-col ">
          <div>
            <h2 className="mb-2 text-3xl font-normal md:text-xxs  lg:text-base lg:font-bold">
              Sign Up To Our Newsletter.
            </h2>
            <p className="text-sm lg:text-xs">
              Be the first to hear about the latest offers.
            </p>
          </div>
          <div className="flex h-12 gap-4 sm:mt-6 sm:w-20 sm:justify-around lg:h-10">
            <input
              className="w-96 rounded border-2 bg-[#020202] pl-3 outline placeholder:text-sm placeholder:font-light placeholder:text-white sm:w-20 lg:w-48"
              type="email"
              placeholder="Your Email"
            />
            <button className="rounded-full bg-color3 pl-7  pr-7">
              Subscribe
            </button>
          </div>
        </div>
        <Links />
        {mdScreen ? (
          <div>
            <div className="mb-8 flex justify-between pt-4">
              <SocialMedia footer />
              <p className="text-sm text-[#ffffff83] xs:text-xxs">
                Copyright © 2020 Shop Pty. Ltd.
              </p>
            </div>
            <div className="flex justify-center">
              <PaymentCards />
            </div>
          </div>
        ) : (
          <div className="flex justify-between border-t border-slate-400 pt-4">
            <SocialMedia footer />
            <PaymentCards />
            <p className="text-sm text-[#ffffff83]">
              Copyright © 2020 Shop Pty. Ltd.
            </p>
          </div>
        )}
      </div>
    </footer>
  );
}

export default FooterComponent;
