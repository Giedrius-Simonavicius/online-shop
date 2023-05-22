import React, { useState } from 'react';
import { customPcs, desktops, laptops, monitors } from '../../data/data';
import { Disclosure, Transition } from '@headlessui/react';

function ArrowUpDown({ open }) {
  return (
    <div className="pb-2">
      {open ? (
        <img src="/public/icons/ui/arrowUp.svg" alt="arrowUp" />
      ) : (
        <img src="/public/icons/ui/arrowDownBc.svg" alt="arrowDown" />
      )}
    </div>
  );
}

function CategoryFilter() {
  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className=" mb-3 flex items-center gap-[3.75rem] font-bold">
              <h2 className="mb-3 font-bold">Category</h2>
              <ArrowUpDown open={open} />
            </Disclosure.Button>

            <Transition
              show={open}
              enter="transition duration-300 ease-out"
              enterFrom="transform scale-y-95 opacity-0"
              enterTo="transform scale-y-100 opacity-100"
              leave="transition duration-100 ease-in"
              leaveFrom="transform scale-y-100 opacity-100"
              leaveTo="transform scale-y-95 opacity-0"
            >
              <Disclosure.Panel>
                <div>
                  <div className="flex justify-between">
                    <p className="text-xs">Custom PC's</p>
                    <span className="text-xs">{customPcs.length - 1}</span>
                  </div>

                  <div className="flex justify-between">
                    <p className="text-xs">Laptops</p>
                    <span className="text-xs">{laptops.length - 1}</span>
                  </div>

                  <div className="flex justify-between">
                    <p className="text-xs">Monitors</p>
                    <span className="text-xs">{monitors.length - 1}</span>
                  </div>

                  <div className="flex justify-between">
                    <p className="text-xs">Desktops</p>
                    <span className="text-xs">{desktops.length - 1}</span>
                  </div>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default CategoryFilter;
