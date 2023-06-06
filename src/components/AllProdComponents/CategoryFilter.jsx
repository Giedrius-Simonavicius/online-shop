import React, { useState } from 'react';
import { allPrd } from '../../data/data';
import { Disclosure, Transition } from '@headlessui/react';
import { useAuthCtx } from '../../store/AuthProvider';

function CategoryFilter() {
  const { filterArr, setFilterArr, capitalizeFirstLetter } = useAuthCtx();

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
  function ArrowUpDown({ open }) {
    return (
      <div className="pb-2">
        {open ? (
          <img src="../../../public/icons/ui/arrowUp.svg" alt="arrowUp" />
        ) : (
          <img src="../../../public/icons/ui/arrowDownBc.svg" alt="arrowDown" />
        )}
      </div>
    );
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

  function getCategoryItemCount(category) {
    return allPrd.filter((product) => product.category === category).length;
  }

  return (
    <div>
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className="mb-3 flex items-end gap-[4.25rem] font-bold">
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
                      <span>{getCategoryItemCount(category)}</span>
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
