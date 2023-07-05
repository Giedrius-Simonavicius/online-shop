import React, { useState } from 'react';
import { allPrd } from '../../data/data';
import { Disclosure, Transition } from '@headlessui/react';
import { useGeneralCtx } from '../../context/GeneralProvider';
import ArrowUpDown from '../openClose/ArrowUpDown';
import { capitalizeFirstLetter } from '../../helperFns';

function CategoryFilter() {
  const { filterArr, setFilterArr, smScreen } = useGeneralCtx();

  function newFilter(event) {
    const category = event.currentTarget.dataset.category;
    if (filterArr.includes(category)) {
      setFilterArr((prevFilterArr) =>
        prevFilterArr.filter((filter) => filter !== category),
      );
    } else {
      setFilterArr((prevFilterArr) => [...prevFilterArr, category]);
    }
  }

  const [uniqueCategories, setUniqueCategories] = useState([]);

  useState(() => {
    const categories = [];
    allPrd.forEach((product) => {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    });
    setUniqueCategories(categories);
  }, []);

  return smScreen ? (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="mb-3 flex items-end font-bold">
              <h2 className="text-xl font-bold">Category</h2>
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
                <div className="mb-3">
                  {uniqueCategories.map((category, index) => (
                    <div className="flex justify-between" key={index}>
                      <button
                        className="hover:text-color3"
                        onClick={newFilter}
                        data-category={category}
                      >
                        {category && capitalizeFirstLetter(category)}
                      </button>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  ) : (
    <div>
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className="mb-3 flex items-end justify-between gap-[4.25rem] font-bold">
              <h2 className="text-sm font-bold">Category</h2>
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
                <div className="mb-3">
                  {uniqueCategories.map((category, index) => (
                    <div className="flex justify-between" key={index}>
                      <button
                        className="hover:text-color3"
                        onClick={newFilter}
                        data-category={category}
                      >
                        {category && capitalizeFirstLetter(category)}
                      </button>
                    </div>
                  ))}
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
