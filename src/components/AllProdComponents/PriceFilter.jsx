import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { useGeneralCtx } from '../../context/GeneralProvider';
import ArrowUpDown from '../openClose/ArrowUpDown';

function CategoryFilter() {
  const { filterArr, setFilterArr, smScreen } = useGeneralCtx();

  function newFilter(event) {
    const priceRange = event.currentTarget.dataset.priceRange;
    if (filterArr.includes(priceRange)) {
      setFilterArr((prevFilterArr) =>
        prevFilterArr.filter((filter) => filter !== priceRange),
      );
    } else {
      setFilterArr((prevFilterArr) => [...prevFilterArr, priceRange]);
    }
  }

  return smScreen ? (
    <div className="mb-8">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className=" mb-3 flex items-end font-bold">
              <h2 className="text-3xl font-bold">Price</h2>
            </Disclosure.Button>

            <Transition
              show={open}
              enter="transition duration-300 transform origin-top"
              enterFrom="opacity-0 scale-y-0"
              enterTo="opacity-100 scale-y-100"
              leave="transition duration-300 transform origin-top"
              leaveFrom="opacity-100 scale-y-100"
              leaveTo="opacity-0 scale-y-0"
            >
              <Disclosure.Panel className="text-base">
                <div>
                  <div className="flex justify-between">
                    <button
                      className="hover:text-color3"
                      onClick={newFilter}
                      data-price-range="0-299"
                    >
                      $0 - $299
                    </button>
                    <span>{}</span>
                  </div>

                  <div className="flex justify-between">
                    <button
                      className="hover:text-color3"
                      onClick={newFilter}
                      data-price-range="300-499"
                    >
                      $300 - $499
                    </button>
                    <span>{}</span>
                  </div>

                  <div className="flex justify-between">
                    <button
                      className="hover:text-color3"
                      onClick={newFilter}
                      data-price-range="500-999"
                    >
                      $500 - $999
                    </button>
                    <span>{}</span>
                  </div>

                  <div className="flex justify-between">
                    <button
                      className="hover:text-color3"
                      onClick={newFilter}
                      data-price-range="1000-above"
                    >
                      $1000 and above
                    </button>
                    <span>{}</span>
                  </div>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  ) : (
    <div className="mb-3">
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className=" mb-3 flex items-end gap-[6.25rem] font-bold">
              <h2 className="text-sm font-bold">Price</h2>
              <ArrowUpDown open={open} />
            </Disclosure.Button>

            <Transition
              show={open}
              enter="transition duration-300 transform origin-top"
              enterFrom="opacity-0 scale-y-0"
              enterTo="opacity-100 scale-y-100"
              leave="transition duration-300 transform origin-top"
              leaveFrom="opacity-100 scale-y-100"
              leaveTo="opacity-0 scale-y-0"
            >
              <Disclosure.Panel className="text-xs">
                <div>
                  <div className="flex justify-between">
                    <button
                      className="hover:text-color3"
                      onClick={newFilter}
                      data-price-range="0-299"
                    >
                      $0 - $299
                    </button>
                    <span>{}</span>
                  </div>

                  <div className="flex justify-between">
                    <button
                      className="hover:text-color3"
                      onClick={newFilter}
                      data-price-range="300-499"
                    >
                      $300 - $499
                    </button>
                    <span>{}</span>
                  </div>

                  <div className="flex justify-between">
                    <button
                      className="hover:text-color3"
                      onClick={newFilter}
                      data-price-range="500-999"
                    >
                      $500 - $999
                    </button>
                    <span>{}</span>
                  </div>

                  <div className="flex justify-between">
                    <button
                      className="hover:text-color3"
                      onClick={newFilter}
                      data-price-range="1000-above"
                    >
                      $1000 and above
                    </button>
                    <span>{}</span>
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
